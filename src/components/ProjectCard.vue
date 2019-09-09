<template>
  <v-col class="msn-item" cols="12" :md="fullscreen ? 6 : 12" :lg="fullscreen ? 4 : 6">
    <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2">
        <v-img :src="proj.image">
          <v-card-title v-if="!proj.iconsTitle" class="white--text align-end fill-height">
            <i v-for="icon in proj.icons" :key="icon" :class="icon" style="font-size:34px" />
          </v-card-title>
        </v-img>
        <div style="position:relative">
          <CardFAB v-if="proj.floating" :floating="proj.floating" :pulse="hover" />
          <v-card-title>
            <span v-if="proj.iconsTitle" class="mr-1">
              <i v-for="icon in proj.icons" :key="icon" :class="icon" class="mr-1" />
            </span>
            {{ proj.name }}
          </v-card-title>
          <v-card-text>
            <vue-markdown>{{ proj.description }}</vue-markdown>
          </v-card-text>
          <v-divider />
          <v-card-actions v-if="proj.links">
            <v-btn
              text
              v-for="link in proj.links"
              :key="link.link"
              @click="urlOpen(link.link)"
            >{{ link.name }}</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
import VueMarkdown from "vue-markdown";
import store from "../store";

import CardFAB from "./small/CardFAB";

export default {
  name: "ProjectCard",
  components: { VueMarkdown, CardFAB },
  props: {
    proj: Object
  },
  computed: {
    fullscreen: () => store.state.fullscreen
  },
  methods: {
    urlOpen(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
