<template>
  <div id="app">
    <div id="main" class="row grey lighten-3">
      <div v-if="!fullscreen" id="header" class="col s12 m5 l4 valign-wrapper">
        <LeftPane :infos="data.profile" />
        <a v-if="!fullscreen" @click="fullscreen = true;" id="expand">
          <TooltipButton class_other="hide-on-small-only btn-small" tooltip="Cacher la barre latérale" icon="nf nf-fa-arrow_left" />
        </a>
      </div>
      <a v-if="fullscreen" @click="fullscreen = false;" id="reduce">
        <TooltipButton class_other="hide-on-small-only btn-small" tooltip="Afficher la barre latérale" icon="nf nf-fa-arrow_right" />
      </a>
      <div v-if="!fullscreen" id="header-proxy" class="hide-on-small-only col s12 m5 l4"></div>

      <router-view :fullscreen="fullscreen" :presentation="data.presentation" />
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

import Presentation from "./components/Presentation";
import TooltipButton from "./components/TooltipButton";
import LeftPane from "./components/LeftPane";

import jsonData from "./assets/data.json";

require("materialize-css/dist/css/materialize.min.css");
require("./assets/styles/nerd-fonts.min.css");

export default {
  name: "App",
  components: {
    Presentation,
    LeftPane,
    VueMarkdown,
    TooltipButton
  },
  data() {
    return {
      data: jsonData,
      fullscreen: false
    };
  }
};
</script>

<style scoped>
#main {
  font-size: 20px;
}

@media only screen and (min-width: 601px) {
  #header {
    position: fixed;
  }
}

#header {
  font-size: 20px;
  background-image: url("/static/images/bg.jpg");
  height: 100vh;
}

#header-proxy {
  height: 100vh;
}

#reduce {
  position: fixed;
  top: 50%;
  left: 10px;
}
</style>
