<template>
  <div class="left-sticky">
    <ul>
      <li>
        <a
          href="https://v4.brittanychiang.com/"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon name="gitHub" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/bchiang7"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon name="instagram" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/bchiang7" aria-label="Twitter" target="_blank" rel="noreferrer"
          >
          <SvgIcon name="twitter"/>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/bchiang7"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
          >
          <SvgIcon name="linkedIn"/>
        </a>
      </li>
      <li>
        <a href="https://codepen.io/bchiang7" aria-label="Codepen" target="_blank" rel="noreferrer"
          >
          <SvgIcon name="codepen"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcons.vue'
</script>

<style scoped lang="scss">
.left-sticky {
  left: 40px;
  width: 40px;
  bottom: 0px;
  z-index: 10;
  position: fixed;
  @media (max-width: 1080px) {
    left: 10px;
  }
  @media (max-width: 550px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;

    &::after {
      content: '';
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: $grey;
    }
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

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
