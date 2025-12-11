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

// Refs for cursor positions
const cursorX = ref(0)
const cursorY = ref(0)
const isMouseOver = ref(true)

const cursorStyle = ref<CursorStyle>({
  left: '0px',
  top: '0px',
  opacity: '0.3'
})

const handleMouseMove = (event: MouseEvent) => {
  cursorX.value = event.clientX
  cursorY.value = event.clientY
  
  cursorStyle.value = {
    left: `${cursorX.value}px`,
    top: `${cursorY.value}px`,
    opacity: isMouseOver.value ? '0.3' : '0'
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
</script>

<template>
  <div class="cursor-glow cursor-glow-outer" :style="cursorStyle"></div>
  <div class="cursor-glow cursor-glow-inner" :style="cursorStyle"></div>
  <div class="cursor-glow cursor-glow-spot" :style="cursorStyle"></div>
  <div class="page-wrapper">
    <TheNavbar/>

    <LeftSticky />

    <RightSticky />

    <main>
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ServicesSection />

      <ScrollSection />

      <ProjectsSection />

      <ContactSection />
    </main>

    <footer>
      <FooterContent />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.page-wrapper {
  background-color: $secondary;

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
