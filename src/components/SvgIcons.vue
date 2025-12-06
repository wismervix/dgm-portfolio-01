<template>
  <div v-if="svgIcon" v-html="svgIcon" class="svg-icon" :class="svgClass" :style="svgStyle"></div>
  <p v-else class="text-danger">Icon "{{ name }}" not found.</p>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

interface SvgIconProps {
  name: string
  size?: string | number
  color?: string
  width?: string | number
  height?: string | number
  fill?: string
  stroke?: string
  strokeWidth?: string | number
  rotate?: string | number
  flip?: 'horizontal' | 'vertical' | 'both'
  spin?: boolean
  class?: string | string[]
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  size: undefined,
  color: 'currentColor',
  width: undefined,
  height: undefined,
  fill: 'currentColor',
  stroke: undefined,
  strokeWidth: undefined,
  rotate: undefined,
  flip: undefined,
  spin: false,
  class: undefined,
})

const iconLibrary: Record<string, string> = {
  logoIcon: `<svg
            class="logo-svg"
            width="208"
            height="215"
            viewBox="0 0 208 215"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-part="logo-ring"
              class="logo-ring"
              d="M97.9004 14.9102C100.577 10.1559 107.423 10.1559 110.1 14.9102L111.693 17.7412C115.055 23.7123 123 25.1888 128.283 20.8252L130.622 18.8936C134.811 15.4338 141.174 17.8583 141.999 23.2285L142.572 26.9629C143.602 33.6661 150.394 37.8494 156.844 35.7539L159.926 34.7529C165.039 33.0918 170.038 37.575 168.941 42.8379L168.056 47.0879C166.694 53.625 171.424 59.8589 178.086 60.3076L181.835 60.5596C187.136 60.9167 190.123 66.8187 187.271 71.3018L184.78 75.2168C181.241 80.78 183.357 88.1862 189.302 91.0391L193.195 92.9072C197.955 95.1912 198.57 101.721 194.32 104.854L190.68 107.536C185.388 111.437 184.677 119.078 189.158 123.889L192.317 127.28C195.924 131.152 194.096 137.471 188.98 138.82L185.062 139.854C178.652 141.545 175.182 148.48 177.674 154.624L179.38 158.83C181.388 163.781 177.331 169.066 172.029 168.407L168.58 167.979C161.901 167.148 156.049 172.456 156.227 179.185L156.335 183.259C156.478 188.664 150.699 192.184 145.962 189.576L143.258 188.088C137.279 184.797 129.778 187.689 127.554 194.141L126.417 197.438C124.641 202.591 117.917 203.828 114.425 199.644L112.444 197.271C108.047 192.003 99.9531 192.003 95.5557 197.271L93.5752 199.644C90.0827 203.828 83.3591 202.591 81.583 197.438L80.4463 194.141C78.2223 187.689 70.7208 184.797 64.7422 188.088L62.0381 189.576C57.301 192.184 51.5221 188.664 51.665 183.259L51.7734 179.185C51.9512 172.456 46.0989 167.148 39.4199 167.979L35.9707 168.407C30.6685 169.066 26.6124 163.781 28.6201 158.83L30.3262 154.624C32.8176 148.48 29.3479 141.545 22.9375 139.854L19.0195 138.82C13.9036 137.471 12.0762 131.152 15.6826 127.28L18.8418 123.889C23.3232 119.078 22.6124 111.437 17.3203 107.536L13.6797 104.854C9.43043 101.721 10.0455 95.1912 14.8047 92.9072L18.6982 91.0391C24.6428 88.1862 26.7592 80.78 23.2197 75.2168L20.7295 71.3018C17.8772 66.8187 20.8635 60.9167 26.165 60.5596L29.9141 60.3076C36.5765 59.8589 41.3064 53.625 39.9443 47.0879L39.0586 42.8379C37.9622 37.575 42.9614 33.0918 48.0742 34.7529L51.1562 35.7539C57.6063 37.8494 64.3979 33.6661 65.4277 26.9629L66.001 23.2285C66.8259 17.8583 73.1887 15.4338 77.3779 18.8936L79.7168 20.8252C85.0004 25.1888 92.9446 23.7123 96.3066 17.7412L97.9004 14.9102Z"
              stroke="currentColor"
              stroke-width="var(--ring-width, 4)"
              fill="none"
            />

            <path
              data-part="logo-circle"
              class="logo-circle"
              d="M90.5 160C81.8333 160 74.2292 158.005 67.6875 154.015C61.1875 150.025 56.1042 144.443 52.4375 137.27C48.8125 130.096 47 121.713 47 112.121C47 102.448 48.8125 94.005 52.4375 86.7909C56.1042 79.5768 61.1875 73.9748 67.6875 69.9849C74.2292 65.995 81.8333 64 90.5 64C99.1667 64 106.75 65.995 113.25 69.9849C119.792 73.9748 124.875 79.5768 128.5 86.7909C132.167 94.005 134 102.448 134 112.121C134 121.713 132.167 130.096 128.5 137.27C124.875 144.443 119.792 150.025 113.25 154.015C106.75 158.005 99.1667 160 90.5 160ZM90.5 147.184C97.0833 147.184 102.5 145.552 106.75 142.287C111 139.023 114.146 134.73 116.188 129.411C118.229 124.091 119.25 118.327 119.25 112.121C119.25 105.914 118.229 100.131 116.188 94.7708C114.146 89.4106 111 85.0781 106.75 81.7733C102.5 78.4685 97.0833 76.8161 90.5 76.8161C83.9167 76.8161 78.5 78.4685 74.25 81.7733C70 85.0781 66.8542 89.4106 64.8125 94.7708C62.7708 100.131 61.75 105.914 61.75 112.121C61.75 118.327 62.7708 124.091 64.8125 129.411C66.8542 134.73 70 139.023 74.25 142.287C78.5 145.552 83.9167 147.184 90.5 147.184Z"
              fill="currentColor"
            />

            <path
              data-part="logo-v"
              class="logo-v"
              d="M178 73L125.825 153.211C125.825 153.211 119.717 155 116.189 155C112.662 155 107.758 153.211 107.758 153.211L65 73H84.2713L115.906 136.918C115.906 136.918 116.556 136.697 116.792 136.697C117.027 136.697 117.778 136.918 117.778 136.918L158.729 73H178Z"
              fill="currentColor"
            />
          </svg>
            `,
  vacant: `
            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 73C55.8823 73 72 56.6584 72 36.5C72 16.3416 55.8823 0 36 0C16.1178 0 0 16.3416 0 36.5C0 56.6584 16.1178 73 36 73Z" fill="#00BF63"/>
            <path d="M30.8571 19.119H41.1429V53.881H30.8571V19.119Z" fill="white"/>
            <path d="M18.8571 31.2857H53.1429V41.7143H18.8571V31.2857Z" fill="white"/>
            </svg>
            `,
} as const

// Validate icon exists
const iconExists = computed(() => props.name in iconLibrary)

// Process SVG with dynamic styles
const svgIcon = computed(() => {
  if (!iconExists.value) return null

  const svg = iconLibrary[props.name]

  // Type guard - check svg is not undefined
  if (!svg) return null // Add this line

  let modifiedSvg = svg

  // Replace fill="currentColor" with the specified color
  if (props.fill !== 'currentColor') {
    modifiedSvg = modifiedSvg.replace(/fill="currentColor"/g, `fill="${props.fill}"`)
  }

  // Add stroke if specified
  if (props.stroke) {
    modifiedSvg = modifiedSvg.replace(/<svg/, `<svg style="stroke: ${props.stroke};"`)
  }

  return modifiedSvg
})

// Dynamic CSS classes
const svgClass = computed(() => {
  const classes: string[] = []

  if (props.class) {
    if (Array.isArray(props.class)) {
      classes.push(...props.class)
    } else {
      classes.push(props.class)
    }
  }

  if (props.spin) {
    classes.push('svg-icon--spin')
  }

  if (props.flip) {
    classes.push(`svg-icon--flip-${props.flip}`)
  }

  return classes.join(' ')
})

// Dynamic inline styles
const svgStyle = computed<CSSProperties>(() => {
  const styles: CSSProperties = {}

  // Size handling
  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  } else if (props.size) {
    styles.width = typeof props.size === 'number' ? `${props.size}px` : props.size
  }

  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  } else if (props.size) {
    styles.height = typeof props.size === 'number' ? `${props.size}px` : props.size
  }

  // Color
  if (props.color !== 'currentColor') {
    styles.color = props.color
  }

  // Rotation
  if (props.rotate) {
    const deg = typeof props.rotate === 'number' ? `${props.rotate}deg` : props.rotate
    styles.transform = `rotate(${deg})`
  }

  // Stroke width
  if (props.strokeWidth) {
    styles.strokeWidth =
      typeof props.strokeWidth === 'number' ? `${props.strokeWidth}px` : props.strokeWidth
  }

  return styles
})
</script>

<style scoped>
.svg-icon svg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 1;

  /* Inherit parent text color by default */
  color: inherit;
}

svg {
  display: inline-block;
  vertical-align: middle;
}
.svg-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 1;

  /* Inherit parent text color by default */
  color: inherit;
}

.svg-icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
  stroke: currentColor;
}
</style>
