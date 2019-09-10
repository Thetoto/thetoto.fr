<template>
  <v-container id="home" :class="{'w70':$vuetify.breakpoint.lgAndUp}">
    <Toc v-if="$vuetify.breakpoint.lgAndUp" :content="toc_list" />
    <span id="intro">
      <h4Title>Bonjour</h4Title>
      <vue-markdown>{{ presentation.intro }}</vue-markdown>
    </span>
    <hr />
    <span id="info" class="toc" name="Informations">
      <h4Title>Informations</h4Title>
      <v-row>
        <v-col cols="12" md="6">
          <h5 class="display-1 mb-2">A propos</h5>
          <vue-markdown>{{ presentation.apropos }}</vue-markdown>
          <a target="_blank" href="/moderncv.pdf">
            <v-btn class="ma-2" outlined>
              <v-icon left>mdi-file-download</v-icon>CV
            </v-btn>
          </a>
        </v-col>
        <v-col cols="12" md="6">
          <h5 class="display-1 mb-2">Compétences</h5>
          <Skills :list="presentation.skills" />
        </v-col>
      </v-row>
    </span>
    <hr />
    <span id="proj_maj" class="toc" name="Projets majeurs">
      <h4Title>Projets majeurs</h4Title>
      <ProjectList msn_id="maj" :list="presentation.projects" />
    </span>
    <hr />
    <span id="proj_perso" class="toc" name="Projets persos">
      <h4Title>Projets perso</h4Title>
      <ProjectList msn_id="perso" :list="presentation.projects_perso" />
    </span>
  </v-container>
</template>

<script>
import store from "../store";
import VueMarkdown from "vue-markdown";

import Toc from "../components/Toc";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import h4Title from "../components/small/h4Title";

export default {
  name: "Home",
  components: { VueMarkdown, Toc, Skills, ProjectList, h4Title },
  computed: {
    presentation: () => store.state.json.presentation,
    fullscreen: () => store.state.fullscreen
  },
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

<style>
#home {
  text-align: justify;
}
</style>