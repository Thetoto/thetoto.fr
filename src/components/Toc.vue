<template>
  <div v-scroll="onScroll" v-if="content.length != 0">
    <ul id="table-of-contents">
      <li v-for="el in content" :key="el.id" class="mb-2">
        <a
          :class="{
            'primary--text': activeIndex === content.indexOf(el),
            'active': activeIndex === content.indexOf(el),
            'grey--text': activeIndex !== content.indexOf(el)
          }"
          @click="$vuetify.goTo('#' + el.id)"
        >{{ el.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Toc",
  props: {
    content: Array
  },
  data: () => ({
    activeIndex: 0,
    currentOffset: 0
  }),
  methods: {
    findActiveIndex() {
      if (this.currentOffset < 100) {
        this.activeIndex = 0;
        return;
      }
      const list = this.content.slice().reverse();
      const index = list.findIndex(item => {
        const section = document.getElementById(item.id);
        if (!section) return false;
        return section.offsetTop - 100 < this.currentOffset;
      });
      const lastIndex = list.length;
      this.activeIndex = index > -1 ? lastIndex - 1 - index : lastIndex;
    },
    onScroll() {
      this.currentOffset =
        window.pageYOffset || document.documentElement.offsetTop;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.findActiveIndex, 50);
    }
  }
};
</script>

<style scoped>
#table-of-contents {
  position: fixed;
  top: 20px;
  right: 20px;
  list-style-type: none !important;
}
.active {
  border-left-color: inherit !important;
}

#table-of-contents li a {
  border-left: 2px solid transparent;
  padding-left: 16px;
}
</style>