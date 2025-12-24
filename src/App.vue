<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface CursorStyle {
  left: string
  top: string
  opacity: string
}
import HeroSection from './components/HeroSection.vue'
import LeftSticky from './components/LeftSticky.vue'
import RightSticky from './components/RightSticky.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ScrollSection from './components/ScrollSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterContent from './components/FooterContent.vue'
import TheNavbar from './components/TheNavbar.vue'
import LoadingSplash from './components/LoadingSplash.vue'
import LazyLoadingVueUse from './components/LazyLoadingVueUse.vue'

// Refs for cursor positions
const cursorX = ref(0)
const cursorY = ref(0)
const isMouseOver = ref(true)

const cursorStyle = ref<CursorStyle>({
  left: '0px',
  top: '0px',
  opacity: '0.3',
})

const handleMouseMove = (event: MouseEvent) => {
  cursorX.value = event.clientX
  cursorY.value = event.clientY

  cursorStyle.value = {
    left: `${cursorX.value}px`,
    top: `${cursorY.value}px`,
    opacity: isMouseOver.value ? '0.3' : '0',
  }
}

const handleMouseEnter = () => {
  isMouseOver.value = true
  cursorStyle.value.opacity = '0.3'
}

const handleMouseLeave = () => {
  isMouseOver.value = false
  cursorStyle.value.opacity = '0'
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('mouseenter', handleMouseEnter)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseleave', handleMouseLeave)
  document.removeEventListener('mouseenter', handleMouseEnter)
})

const showSplash = ref(true)
const contentVisible = ref(false)

onMounted(() => {
  document.addEventListener('splash-complete', () => {
    // First make content visible, then hide splash
    contentVisible.value = true

    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      showSplash.value = false
    }, 100)
  })
})
</script>

<template>
  <div class="cursor-glow cursor-glow-outer" :style="cursorStyle"></div>
  <div class="cursor-glow cursor-glow-inner" :style="cursorStyle"></div>
  <div class="cursor-glow cursor-glow-spot" :style="cursorStyle"></div>

  <LoadingSplash v-if="showSplash" />

  <div class="bubbles d-lg-block d-none">
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
  </div>

  <!-- <div class="page-wrapper" :class="{ 'splash-complete': !showSplash/ }"> -->
  <div class="page-wrapper" v-show="contentVisible">
    <LeftSticky />

    <RightSticky />

    <div class="main-content">
      <TheNavbar />
    </div>

    <main>
      <LazyLoadingVueUse :index="0" :threshold="0.05" delay="0.1">
        <HeroSection />
      </LazyLoadingVueUse>

      <LazyLoadingVueUse :index="1" :threshold="0.1" delay="0.2">
        <AboutSection />
      </LazyLoadingVueUse>

      <LazyLoadingVueUse :index="2" :threshold="0.1" delay="0.3">
        <ExperienceSection />
      </LazyLoadingVueUse>

      <!-- Note: Two components in one lazy section might not work well -->
      <LazyLoadingVueUse :index="3" :threshold="0.2" delay="0.4">
        <div class="services-scroll-wrapper">
          <ServicesSection />
          <ScrollSection />
        </div>
      </LazyLoadingVueUse>

      <LazyLoadingVueUse :index="4" :threshold="0.1" delay="0.5">
        <ProjectsSection />
      </LazyLoadingVueUse>

      <LazyLoadingVueUse :index="5" :threshold="0.1" delay="0.6">
        <ContactSection />
      </LazyLoadingVueUse>
    </main>

    <LazyLoadingVueUse :index="6" :threshold="0.05" delay="0.7">
      <footer>
        <FooterContent />
      </footer>
    </LazyLoadingVueUse>
  </div>
</template>

<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}

/* Page load transition */
.main-content {
  opacity: 0;
  animation: pageLoad 0.8s ease 0.3s forwards;
}

@keyframes pageLoad {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bubbles {
  position: fixed; /* Changed from default/absolute to fixed */
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* So they don't interfere with clicks */
  z-index: 1; /* Adjust as needed */
  overflow: hidden;

  .bubble {
    position: absolute;
    bottom: -100px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0);
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0),
      inset 1px -7px 13px rgba(255, 255, 255, 0.54);
    border-radius: 50%;
    opacity: 0.5;
    animation: rise 10s infinite ease-in;
  }

  /* Different speeds for variety */
  .bubble:nth-child(1) {
    animation-duration: 25s;
    animation-delay: 0s;
  }
  .bubble:nth-child(2) {
    animation-duration: 20s;
    animation-delay: 2s;
  }
  .bubble:nth-child(3) {
    animation-duration: 30s;
    animation-delay: 4s;
  }
  .bubble:nth-child(4) {
    animation-duration: 22s;
    animation-delay: 6s;
  }
  .bubble:nth-child(5) {
    animation-duration: 18s;
    animation-delay: 8s;
  }
  .bubble:nth-child(6) {
    animation-duration: 27s;
    animation-delay: 10s;
  }
  .bubble:nth-child(7) {
    animation-duration: 23s;
    animation-delay: 12s;
  }

  /* Add random horizontal movement */
  .bubble:nth-child(odd) {
    --random-x: 1;
  }
  .bubble:nth-child(even) {
    --random-x: -1;
  }
  .bubble:nth-child(3n) {
    --random-x: 1.5;
  }
  .bubble:nth-child(4n) {
    --random-x: -1.5;
  }

  .bubble:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 10%;
    animation-duration: 8s;
  }

  .bubble:nth-child(2) {
    width: 20px;
    height: 20px;
    left: 20%;
    animation-duration: 5s;
    animation-delay: 1s;
  }

  .bubble:nth-child(3) {
    width: 50px;
    height: 50px;
    left: 35%;
    animation-duration: 7s;
    animation-delay: 2s;
  }

  .bubble:nth-child(4) {
    width: 80px;
    height: 80px;
    left: 50%;
    animation-duration: 11s;
    animation-delay: 0s;
  }

  .bubble:nth-child(5) {
    width: 35px;
    height: 35px;
    left: 55%;
    animation-duration: 6s;
    animation-delay: 1s;
  }

  .bubble:nth-child(6) {
    width: 45px;
    height: 45px;
    left: 65%;
    animation-duration: 8s;
    animation-delay: 3s;
  }

  .bubble:nth-child(7) {
    width: 90px;
    height: 90px;
    left: 70%;
    animation-duration: 12s;
    animation-delay: 2s;
  }

  .bubble:nth-child(8) {
    width: 25px;
    height: 25px;
    left: 80%;
    animation-duration: 6s;
    animation-delay: 2s;
  }

  .bubble:nth-child(9) {
    width: 15px;
    height: 15px;
    left: 70%;
    animation-duration: 5s;
    animation-delay: 1s;
  }

  .bubble:nth-child(10) {
    width: 90px;
    height: 90px;
    left: 25%;
    animation-duration: 10s;
    animation-delay: 4s;
  }
}

.page-wrapper {
  background-color: $secondary;
  transition: opacity 0.3s ease;

  &.splash-complete {
    opacity: 1;
  }

  main {
    width: 100%;
    padding: 0 100px;
    min-height: 100vh;
    max-width: 1600px;
    counter-reset: section;
    @media (max-width: 1080px) {
      padding: 0px 70px;
    }
    @media (max-width: 768px) {
      padding: 0px 60px;
    }
    @media (max-width: 480px) {
      padding: 0px 35px;
    }
  }

  footer {
    padding: 15px;
    min-height: 70px;
    text-align: center;
    @include centered(0, center, nowrap, column);
  }
}
</style>
