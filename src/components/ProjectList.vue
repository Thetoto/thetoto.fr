<template>
  <div>
    <ProjectCard v-for="proj in list" :key="proj.name" :proj="proj" />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard";

export default {
  name: "ProjectList",
  components: { ProjectCard },
  props: {
    list: Array
  }
};
</script>

<style>
</style>