<template>
  <div class="right-sticky">
    <div class="email-wrapper">
      <a href="mailto:etangdgm001@gmail.com">etangdgm001@gmail.com</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.right-sticky {
  right: 40px;
  width: 40px;
  bottom: 0px;
  z-index: 10;
  position: fixed;
  @media (max-width: 1080px) {
    right: 10px;
  }
  @media (max-width: 550px) {
    display: none;
  }

  .email-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &::after {
      content: '';
      width: 1px;
      height: 90px;
      margin: 0px auto;
      background-color: $grey;
    }
    a {
      color: $grey;
      margin: 20px auto;
      padding: 10px;
      font-size: 12px;
      line-height: 18px;
      position: relative;
      display: inline-block;
      letter-spacing: 0.1em;
      writing-mode: vertical-rl;
      transition: var(--transition);

      &:hover {
        color: $primary;
        transform: translateY(-3px);
      }
    }
  }
}
</style>
