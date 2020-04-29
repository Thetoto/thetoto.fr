<template>
  <v-card class="mx-auto" max-width="400" tile>
    <span v-for="skill in list" :key="list.indexOf(skill)">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-tooltip bottom v-for="(icon, i) in skill.icons" :key="i">
              <template v-slot:activator="{ on }">
                <i v-on="on" :class="icon" class="medium"></i>
              </template>
              <span>{{skill.hints[i]}}</span>
            </v-tooltip>
            <span v-if="skill.text">{{ skill.text }}</span>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <div class="right-star">
            <i v-for="i in Math.floor(skill.stars)" :key="i" class="nf nf-fa-star" />
            <i
              v-if="Math.floor(skill.stars) != Math.ceil(skill.stars)"
              class="nf nf-fa-star_half_o"
            />
            <i v-for="i in (5 - Math.ceil(skill.stars))" :key="i + 5" class="nf nf-fa-star_o" />
          </div>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
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