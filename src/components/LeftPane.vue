<template>
  <div class="container right-align white-text">
    <div class="container right">
      <a v-bind:href="infos.avatar_url">
        <img class="responsive-img z-depth-5" v-bind:src="infos.avatar_url" />
      </a>
    </div>
    <br />
    <h5>{{ infos.firstname }} '{{ infos.pseudo }}' {{ infos.lastname}},</h5>
    <vue-markdown id="short-bio">{{ infos.short_bio_md }}</vue-markdown>
    <hr />
    <a
      v-for="link in infos.links"
      :key="link.url"
      target="_blanc"
      v-bind:href="link.url"
      class="social"
    >
      <i v-bind:class="link.icon"></i>
    </a>
    <hr />
    <p>
      Email :
      <span
        ref="email_tooltip"
        id="email-copy"
        class="tooltipped"
        data-position="bottom"
        :data-tooltip="email_clicked ? 'Copié !' : 'Cliquer pour copier'"
        @click="saveEmailClipboard"
      >{{ infos.email }}</span>
    </p>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import M from "materialize-css/dist/js/materialize";

export default {
  components: {
    VueMarkdown
  },
  name: "LeftPane",
  props: {
    infos: Object
  },
  data() {
    return {
      email_clicked: false
    };
  },
  mounted() {
    M.Tooltip.init(this.$refs.email_tooltip);
  },
  beforeDestroy() {
    var tooltip = M.Tooltip.getInstance(this.$refs.email_tooltip);
    tooltip.destroy();
  },
  methods: {
    saveEmailClipboard(event) {
      const el = document.createElement("textarea");
      el.value = "mail@thetoto.fr";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.email_clicked = true;

      setTimeout(this.updateTooltip, 50);
    },
    updateTooltip(event) {
      var tooltip = M.Tooltip.getInstance(this.$refs.email_tooltip);
      tooltip.destroy();
      tooltip = M.Tooltip.init(this.$refs.email_tooltip);
      tooltip.open();
    }
  }
};
</script>

<style>
.social {
  color: #e1e1e1;
  margin-right: 20px;
}
.social:hover {
  color: white;
}
.social i {
  font-size: 35px;
}

#short-bio {
  color: #e1e1e1;
}
#short-bio a {
  color: white;
}

hr {
  color: #fff;
}

br {
  clear: both;
}
</style>
