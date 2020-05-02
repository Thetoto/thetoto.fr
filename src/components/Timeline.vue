<template>
  <v-timeline :dense="$vuetify.breakpoint.mdAndDown">
    <v-timeline-item hide-dot right>
      <template v-slot:opposite>
        <h4Title>Formation</h4Title>
      </template>
      <h4Title>Expérience</h4Title>
    </v-timeline-item>
    <v-timeline-item
      v-for="el in timeline.slice().reverse()"
      :key="el.title"
      fill-dot
      :left="el.isSchool"
      :right="!el.isSchool"
      :icon="el.isSchool ? 'mdi-school' : 'mdi-briefcase'"
      :color="el.isSchool ? 'accent' : 'error'"
    >
      <template v-slot:opposite>
        <span class="headline">{{ el.year }}</span>
        <br />
        <span>{{ el.place }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">
          <v-chip v-if="el.chip" class="ma-2" label>
            <v-icon left>mdi-label</v-icon>
            {{ el.chip }}
          </v-chip>
          {{ el.title }}
        </v-card-title>
        <v-card-text v-if="el.description">
          <vue-markdown>{{ el.description }}</vue-markdown>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import store from "../store";

import VueMarkdown from "vue-markdown";
import h4Title from "./small/h4Title";

export default {
  name: "Timeline",
  components: { h4Title, VueMarkdown },
  computed: {
    timeline: () => store.state.timeline,
    fullscreen: () => store.state.fullscreen
  }
};
</script>

<style scoped>
</style>