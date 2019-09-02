<template>
  <ul class="collection with-header">
    <li v-for="skill in list" :key="list.indexOf(skill)" class="collection-item">
      <div class="valign-wrapper">
        <i v-for="icon in skill.icons" :key="icon" :class="icon" class="medium"></i>
        <span v-if="skill.text">{{ skill.text }}</span>
        <div class="right-star">
          <i v-for="i in skill.stars" :key="i" class="nf nf-fa-star" /><i v-if="skill.half_star" class="nf nf-fa-star_half_o" /><i v-for="i in (5 - skill.stars - (skill.half_star ? 1 : 0))" :key="i + 5" class="nf nf-fa-star_o" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Skills",
  props: {
    list: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-star {
    text-align: right;
    width: 100%;
}
.right-star i {
    font-size: 24px;
}

.adjust {
    position: absolute;
    left: 80px;
    font-size: 4.5rem !important;
}

.medium {
    font-size: 3rem;
    margin-right: 10px;
}
</style>
