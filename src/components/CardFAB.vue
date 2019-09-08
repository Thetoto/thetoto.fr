<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        @click="urlOpen(floating.link)"
        color="red lighten-1"
        dark
        small
        absolute
        top
        right
        fab
      >
        <i :class="floating.icon" />
      </v-btn>
    </template>
    <span>{{ floating.tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "CardFAB",
  props: {
    floating: Object
  },
  methods: {
    urlOpen(url) {
      window.open(url, "_blank");
    }
  }
};
</script>