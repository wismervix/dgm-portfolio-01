<template>
  <div class="platforms">
    <ul>
      <li>
        <a
          href="https://v4.brittanychiang.com/"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcons name="gitHub" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/bchiang7"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <svg-icons name="instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/bchiang7"
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <svg-icons name="twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/bchiang7"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <svg-icons name="linkedIn" />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/bchiang7" aria-label="Codepen" target="_blank" rel="noreferrer">
          <svg-icons name="codepen" />
        </a>
      </li>
    </ul>
  </div>
  <div class="dever-info">
    <a href="">
      <div>Designed & Built by Victory Okon</div>
      
      <div class="github-stats">
        <span>
          <svg-icons name="star" />

          <span>8,116</span>
        </span>
        <span>
          <svg-icons name="gitFork" />

          <span>4,188</span>
        </span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
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

.dever-info {
  @include dynamic-text(400, 12px, $grey, $line-height: 1);

  a {
    padding: 10px;
    transition: var(--transition);

    &:hover {
      color: $primary;
    }

    .github-stats {
      margin-top: 10px;

      span {
        margin: 0 7px;
        align-items: center;
        display: inline-flex;
      }

      :deep(svg) {
        width: 14px;
        height: 14px;
        margin-right: 5px;
        display: inline-block;
      }
    }
  }
}
</style>
