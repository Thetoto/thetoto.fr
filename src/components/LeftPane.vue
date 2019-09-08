<template>
  <v-container class="d-flex h100 w70">
    <div class="align-self-center text-right">
      <div class="mb-5 w70 float-right">
        <a :href="infos.avatar_url" class="w70">
          <img id="avatar" class="elevation-14" :src="infos.avatar_url" />
        </a>
      </div>
      <div class="float-right w100">
        <p class="headline">{{ infos.firstname }} '{{ infos.pseudo }}' {{ infos.lastname}},</p>
        <vue-markdown id="short-bio">{{ infos.short_bio_md }}</vue-markdown>
        <hr class="my-3" />
        <a
          v-for="link in infos.links"
          :key="link.url"
          target="_blanc"
          v-bind:href="link.url"
          class="social"
        >
          <i v-bind:class="link.icon"></i>
        </a>
        <hr class="my-3" />
        <p>
          Email :
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-on="on" @click="saveEmailClipboard">{{ infos.email }}</span>
            </template>
            <span>{{ email_clicked ? 'Copié !' : 'Cliquer pour copier' }}</span>
          </v-tooltip>
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
import store from "../store";
import VueMarkdown from "vue-markdown";

export default {
  name: "LeftPane",
  components: {
    VueMarkdown
  },
  computed: {
    infos: () => store.state.json.profile
  },
  data() {
    return {
      email_clicked: false
    };
  },
  methods: {
    saveEmailClipboard() {
      const el = document.createElement("textarea");
      el.value = "mail@thetoto.fr";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.email_clicked = true;
    }
  }
};
</script>

<style scoped>
* {
  color: white;
}

#avatar {
  width: 100%;
  height: auto;
}

.social i {
  color: #e1e1e1;
  font-size: 35px;
  margin-right: 20px;
}
.social i:hover {
  color: white;
}

#short-bio {
  color: #e1e1e1;
}

hr {
  color: #fff;
}

br {
  clear: both;
}
</style>