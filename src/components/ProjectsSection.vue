<template>
  <section id="projects">
    <h2 class="numbered-heading">Some Things I’ve Built</h2>

    <ProjectItems />
  </section>
</template>

<script setup lang="ts">
import ProjectItems from './ProjectItems.vue'
</script>

<style scoped lang="scss">
#projects {
  max-width: 1000px;
}
</style>
