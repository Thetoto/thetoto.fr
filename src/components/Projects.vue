<template>
  <div ref="msnry" class="row cards-container">
    <div
      v-for="project in list"
      :key="project.name"
      class="card-item card-sizer col s12"
      :class="fullscreen ? 'm6 l4' : 'm12 l6'"
    >
      <div
        class="card hoverable"
        @mouseenter="project.hover = true"
        @mouseleave="project.hover = false"
      >
        <div v-if="project.image" class="card-image">
          <img :src="project.image" />
          <span v-if="!project.iconsTitle" class="card-title">
            <i v-for="icon in project.icons" :key="icon" :class="icon" />
          </span>
          <a :href="project.floating.url" target="_blank" v-if="project.floating">
            <TooltipButton
              class_other="halfway-fab"
              :icon="project.floating.icon"
              :pulse="project.hover"
              :tooltip="project.floating.tooltip"
            />
          </a>
        </div>
        <div class="card-content">
          <span class="card-title">
            <span v-if="project.iconsTitle">
              <i v-for="icon in project.icons" :key="icon" :class="icon" />
            </span>
            {{ project.name }}
          </span>
          <vue-markdown>{{ project.description }}</vue-markdown>
        </div>
        <div v-if="project.links" class="card-action">
          <a
            v-for="link in project.links"
            :key="link.link"
            target="_blank"
            :href="link.link"
          >{{ link.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Masonry from "masonry-layout";

import TooltipButton from "./TooltipButton"

export default {
  components: {
    VueMarkdown,
    TooltipButton
  },
  name: "Projects",
  props: {
    list: Array,
    fullscreen: Boolean
  },
  mounted() {
    this.$nextTick(function() {
      var msnry = new Masonry(this.$refs.msnry, {
        // options
        itemSelector: ".card-item",
        columnWidth: ".card-sizer"
      });
      this.interval = setInterval(function() {
        msnry.layout();
      }, 1000);
    });
  },
  destroyed: function() {
    clearInterval(this.interval);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
