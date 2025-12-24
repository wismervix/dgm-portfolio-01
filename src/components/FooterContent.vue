<template>
  <div class="platforms">
    <ul>
      <li>
        <a href="https://github.com/wismervix" aria-label="GitHub" target="_blank" rel="noreferrer">
          <SvgIcons name="gitHub" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/d.g.m464"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <svg-icons name="instagram" />
        </a>
      </li>
      <li>
        <a href="https://x.com/daGreatMervix" aria-label="Twitter" target="_blank" rel="noreferrer">
          <svg-icons name="twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://facebook.com/daonly.dgm"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <svg-icons name="linkedIn" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/wismervix"
          aria-label="Codepen"
          target="_blank"
          rel="noreferrer"
        >
          <svg-icons name="codepen" />
        </a>
      </li>
    </ul>
  </div>
  
  <GitHubStats/>
</template>

<script setup lang="ts">
import GitHubStats from './GitHubStats.vue';
import SvgIcons from './SvgIcons.vue'
</script>

<style scoped lang="scss">
.platforms {
  display: none;

  @media (max-width: 550px) {
    display: block;
  }

  ul {
    @include spread();
    li {
      a {
        color: $grey;
        padding: 10px;
        display: inline-block;
        transition: var(--transition);

        &:hover {
          color: $primary;
          transform: translateY(-3px);
        }

        :deep(svg) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
