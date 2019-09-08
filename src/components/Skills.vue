<template>
  <v-card class="mx-auto" max-width="400" tile>
    <span v-for="skill in list" :key="list.indexOf(skill)">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <i v-for="icon in skill.icons" :key="icon" :class="icon" class="medium"></i>
            <span v-if="skill.text">{{ skill.text }}</span>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <div class="right-star">
            <i v-for="i in skill.stars" :key="i" class="nf nf-fa-star" />
            <i v-if="skill.half_star" class="nf nf-fa-star_half_o" />
            <i
              v-for="i in (5 - skill.stars - (skill.half_star ? 1 : 0))"
              :key="i + 5"
              class="nf nf-fa-star_o"
            />
          </div>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
    </span>
  </v-card>
</template>

<script>
export default {
  name: "Skills",
  props: {
    list: Array
  }
};
</script>

<style>
.right-star i {
  font-size: 24px;
}

.adjust {
  position: absolute;
  left: 80px;
  top: 0px;
  font-size: 4.5rem !important;
}

.medium {
  font-size: 3rem;
  margin-right: 10px;
}
</style>