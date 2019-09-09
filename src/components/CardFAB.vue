<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        :class="{'pulse': pulse}"
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
    floating: Object,
    pulse: Boolean
  },
  methods: {
    urlOpen(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes pulse-animation {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

.pulse {
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: inherit;
    transition: opacity 0.3s, transform 0.3s;
    animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    z-index: -1;
  }
  overflow: visible;
}
</style>
