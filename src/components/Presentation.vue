<template>
  <div id="content" class="col s12 valign-wrapper" :class="fullscreen ? 'm12 l12' : 'm7 l8'">
    <MainTable v-if="!fullscreen" />
    <div class="container">
      <span id="intro" class>
        <h4>Bonjour</h4>
        <vue-markdown>{{ presentation.intro }}</vue-markdown>
      </span>
      <hr />
      <span id="info" class="section scrollspy">
        <h4>Informations</h4>
        <div class="row">
          <div class="col m12 l6">
            <h5>A propos</h5>
            <vue-markdown>{{ presentation.apropos }}</vue-markdown>
            <a target="_blank" class="waves-effect waves-teal btn-flat" href="static/moderncv.pdf">
              <i class="nf nf-fa-download"></i> CV
            </a>
          </div>
          <div class="col m12 l6">
            <h5>Compétences</h5>
            <Skills :list="presentation.skills" />
          </div>
        </div>
      </span>
      <hr />
      <span id="proj_maj" class="section scrollspy">
        <h4>Projets majeurs</h4>
        <Projects :fullscreen="fullscreen" :list="presentation.projects" />
      </span>
      <hr />
      <span id="proj_perso" class="section scrollspy">
        <h4>Projets perso</h4>
        <Projects :fullscreen="fullscreen" :list="presentation.projects_perso" />
      </span>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import M from "materialize-css/dist/js/materialize";

import MainTable from "./MainTable";
import Skills from "./Skills";
import Projects from "./Projects";

export default {
  components: {
    MainTable,
    VueMarkdown,
    Skills,
    Projects
  },
  name: "Presentation",
  props: {
    presentation: Object,
    fullscreen: Boolean
  },
  mounted() {
    M.ScrollSpy.init(document.querySelectorAll(".scrollspy"), {
      scrollOffset: 20
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  min-height: 100vh;
  text-align: justify;
}

hr {
  color: black;
}
</style>
