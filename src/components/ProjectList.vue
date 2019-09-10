<template>
  <div v-masonry="msn_id" item-selector=".msn-item">
    <ProjectCard v-for="proj in list" :key="proj.name" :proj="proj" />
  </div>
</template>

<script>
import Vue from "vue";
import { VueMasonryPlugin } from "vue-masonry";
import store from "../store";

import ProjectCard from "./ProjectCard";
import { setTimeout, setInterval, clearInterval } from "timers";

Vue.use(VueMasonryPlugin);

export default {
  name: "ProjectList",
  components: { ProjectCard },
  props: {
    msn_id: String,
    list: Array
  },
  computed: {
    fullscreen: () => store.state.fullscreen
  },
  watch: {
    fullscreen() {
      var _this = this;
      setTimeout(() => _this.$redrawVueMasonry(this.msn_id), 50);
    }
  },
  mounted() {
    var _this = this;
    this.interval = setInterval(() => _this.$redrawVueMasonry(this.msn_id), 500);
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
</style>