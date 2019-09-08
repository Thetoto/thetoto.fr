<template>
  <v-container class="w70">
    <Toc v-if="!$vuetify.breakpoint.smAndDown" :content="toc_list" />
    <span id="intro">
      <h4>Bonjour</h4>
      <vue-markdown>{{ presentation.intro }}</vue-markdown>
    </span>
    <hr />
    <span id="info" class="toc" name="Informations">
      <h4>Informations</h4>
      <v-row>
        <v-col cols="12" md="6">
          <h5>A propos</h5>
          <vue-markdown>{{ presentation.apropos }}</vue-markdown>
          <a target="_blank" href="/moderncv.pdf">
            <v-btn class="ma-2" outlined>
              <v-icon left>mdi-file-download</v-icon>CV
            </v-btn>
          </a>
        </v-col>
        <v-col cols="12" md="6">
          <h5>Compétences</h5>
          <Skills :list="presentation.skills" />
        </v-col>
      </v-row>
    </span>
    <hr />
    <span id="proj_maj" class="toc" name="Projets majeurs">
      <h4>Projets majeurs</h4>
      <ProjectList msn_id="maj" :list="presentation.projects" />
    </span>
    <hr />
    <span id="proj_perso" class="toc" name="Projets persos">
      <h4>Projets perso</h4>
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

export default {
  name: "Home",
  components: { VueMarkdown, Toc, Skills, ProjectList },
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
