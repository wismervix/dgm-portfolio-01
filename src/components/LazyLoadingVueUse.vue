<!-- components/LazySectionVueUse.vue -->
<template>
  <div
    ref="sectionRef"
    :class="['lazy-section', { 'is-visible': isVisible }]"
    :style="{ '--animation-delay': `${Number(index) * 0.1}s` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

interface Props {
  index?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  index: 0,
  threshold: 0.1,
  rootMargin: '50px',
  once: true
})

const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

useIntersectionObserver(
  sectionRef,
  (entries) => {
    const entry = entries[0]
    if (entry?.isIntersecting) {
      isVisible.value = true
    } else if (!props.once) {
      isVisible.value = false
    }
  },
  {
    threshold: props.threshold,
    rootMargin: props.rootMargin
  }
)
</script>

<style scoped lang="scss">
.lazy-section {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: var(--animation-delay, 0s);
}

.lazy-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Optional: Different animation styles you can toggle with props */
.lazy-section.fade-in.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.lazy-section.slide-left.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.lazy-section.slide-left {
  opacity: 0;
  transform: translateX(50px);
}

.lazy-section.zoom-in.is-visible {
  opacity: 1;
  transform: scale(1);
}

.lazy-section.zoom-in {
  opacity: 0;
  transform: scale(0.95);
}
</style>