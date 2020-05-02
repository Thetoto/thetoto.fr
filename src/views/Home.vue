<template>
  <MainContainer>
    <span id="intro">
      <h4Title>Bonjour</h4Title>
      <vue-markdown>{{ presentation.intro }}</vue-markdown>
    </span>
    <hr />
    <span id="info" class="toc" name="Informations">
      <h4Title>Informations</h4Title>
      <v-row>
        <v-col cols="12" md="6">
          <h5 class="headline font-weight-light mb-2">A propos</h5>
          <vue-markdown>{{ presentation.apropos }}</vue-markdown>
          <a v-if="presentation.cv" target="_blank" :href="presentation.cv">
            <v-btn class="ma-2" outlined>
              <v-icon left>mdi-file-download</v-icon>CV
            </v-btn>
          </a>
        </v-col>
        <v-col cols="12" md="6">
          <h5 class="headline font-weight-light mb-2">Compétences</h5>
          <Skills :list="presentation.skills" />
        </v-col>
      </v-row>
    </span>
    <hr />
    <span id="proj_maj" class="toc" name="Projets scolaires">
      <h4Title>Projets scolaires et autres</h4Title>
      <ProjectList msn_id="maj" :list="projects_school" />
    </span>
    <hr />
    <span id="proj_perso" class="toc" name="Projets persos">
      <h4Title>Projets perso</h4Title>
      <ProjectList msn_id="perso" :list="projects_perso" />
    </span>
    <hr />
    <span id="timeline" class="toc" name="Parcours">
      <Timeline />
    </span>
  </MainContainer>
</template>

<script>
import store from "../store";
import VueMarkdown from "vue-markdown";

import MainContainer from "../components/MainContainer";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import h4Title from "../components/small/h4Title";
import Timeline from "../components/Timeline";

export default {
  name: "Home",
  components: { VueMarkdown, Skills, ProjectList, h4Title, Timeline, MainContainer },
  computed: {
    presentation: () => store.state.presentation,
    projects_perso: () => store.state.projects_perso,
    projects_school: () => store.state.projects_school,
    fullscreen: () => store.state.fullscreen
  }
};
</script>

<style>
</style>