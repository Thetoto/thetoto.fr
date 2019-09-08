<template>
  <v-app>
    <v-content>
      <v-row>
        <v-col
          v-if="!fullscreen"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'p-fixed'"
          id="header"
          cols="12"
          md="5"
          lg="4"
        >
          <LeftPane></LeftPane>
          <v-tooltip v-model="show_on" bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                @click="on_fullscreen"
                color="red lighten-1"
                fab
                small
                absolute
                right
                style="top:50%"
              >
                <v-icon color="white">mdi-chevron-left</v-icon>
              </v-btn>
            </template>
            <span>Cacher la barre latérale</span>
          </v-tooltip>
        </v-col>

        <v-col
          v-if="!$vuetify.breakpoint.smAndDown && !fullscreen"
          id="header-proxy"
          cols="12"
          md="5"
          lg="4"
        ></v-col>
        <v-col id="router" cols="12" :md="fullscreen ? 12 : 7" :lg="fullscreen ? 12 : 8">
          <v-tooltip v-if="fullscreen" v-model="show_off" bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                @click="off_fullscreen"
                color="red lighten-1"
                fab
                small
                fixed
                left
                style="top:50%"
              >
                <v-icon color="white">mdi-chevron-right</v-icon>
              </v-btn>
            </template>
            <span>Afficher la barre latérale</span>
          </v-tooltip>

          <router-view></router-view>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import LeftPane from "./components/LeftPane";
import store from "./store";

require("./assets/styles/nerd-fonts.min.css");

export default {
  name: "App",
  components: {
    LeftPane
  },
  data() {
    return {
      show_on: false,
      show_off: false
    };
  },
  computed: {
    fullscreen: () => store.state.fullscreen
  },
  methods: {
    on_fullscreen() {
      this.show_on = false;
      store.commit("swap_fullscreen");
    },
    off_fullscreen() {
      this.show_off = false;
      store.commit("swap_fullscreen");
    }
  }
};
</script>

<style scoped>
#header {
  background-image: url("/images/bg.jpg");
  height: 100vh;
}

.p-fixed {
  position: fixed;
}
</style>