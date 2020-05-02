<template>
  <v-container
    style="text-align:justify"
    :class="{'w90':$vuetify.breakpoint.mdAndDown,'w70':$vuetify.breakpoint.lgAndUp}"
  >
    <Toc v-if="$vuetify.breakpoint.lgAndUp" :content="toc_list" />
    <slot />
  </v-container>
</template>

<script>
import Toc from "../components/Toc";

export default {
  name: "MainContainer",
  components: { Toc },
  data() {
    return {
      toc_list: []
    };
  },
  mounted() {
    var toc = document.querySelectorAll(".toc");
    var list = this.toc_list;
    Array.prototype.forEach.call(toc, function(el) {
      list.push({ id: el.id, name: el.getAttribute("name") });
    });
  }
};
</script>