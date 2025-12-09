<template>
  <section id="scroll-slide">
    <div class="scroll-wrapper">
      <div class="flex-cont">
        <div class="each-scroll-item">
          <svg-icons name="uiDesign" />

          <div class="service-name">UI/UX Design</div>
        </div>
        <div class="each-scroll-item">
          <svg-icons name="appDev" />

          <div class="service-name">App Dev</div>
        </div>
        <div class="each-scroll-item">
          <svg-icons name="digitalMarketing" />

          <div class="service-name">Digital Marketing</div>
        </div>
        <div class="each-scroll-item">
          <SvgIcons name="webDev" />

          <div class="service-name">Web Dev</div>
        </div>
      </div>
      <div class="flex-cont">
        <div class="each-scroll-item">
          <svg-icons name="uiDesign" />

          <div class="service-name">UI/UX Design</div>
        </div>
        <div class="each-scroll-item">
          <svg-icons name="appDev" />

          <div class="service-name">App Dev</div>
        </div>
        <div class="each-scroll-item">
          <svg-icons name="digitalMarketing" />

          <div class="service-name">Digital Marketing</div>
        </div>
        <div class="each-scroll-item">
          <SvgIcons name="webDev" />

          <div class="service-name">Web Dev</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcons from './SvgIcons.vue'
</script>

<style scoped lang="scss">
#scroll-slide {
  padding: 20px 0;
  overflow: hidden;
  position: relative;
  background-color: $secondary;

  .scroll-wrapper {
    display: flex;
    width: fit-content;
    animation: scroll-left 40s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  .flex-cont {
    display: flex;
    gap: 33px;

    &:first-child {
      margin-right: 33px;
    }
  }

  .each-scroll-item {
    gap: 9px;
    display: flex;
    flex-shrink: 0;
    color: $grey;
    white-space: nowrap;
    padding-right: 20px;
    align-items: center;
    min-width: max-content;

    .service-name {
      font: 500 31px system-ui;
    }
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(50%);
    }

    100% {
      transform: translateX(-37%);
    }
  }
}
</style>
