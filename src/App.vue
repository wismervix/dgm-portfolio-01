<script setup lang="ts">
import { RouterView } from 'vue-router'
import SvgIcon from './components/SvgIcons.vue'
</script>

<template>
  <div class="cursor-glow cursor-glow-outer"></div>
  <div class="cursor-glow cursor-glow-inner"></div>
  <div class="cursor-glow cursor-glow-spot"></div>
  <div class="page-wrapper">
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><SvgIcon name="logoIcon" class="logo-svg" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="portfolioNav">
          <div class="navbar-nav">
            <a class="nav-link active" href="#about">About</a>
            <a class="nav-link" href="#experience">Experience</a>
            <a class="nav-link" href="#services">Services</a>
            <a class="nav-link" href="#projects">Projects</a>
            <a class="nav-link" href="#contact">Contact</a>
            <!-- <a class="nav-link btn" href="">Resume</a> -->
            <button class="nav-link btn">Resume</button>
          </div>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.cursor-glow {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-glow-outer {
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle at center,
    rgba(212, 76, 255, 0.08) 0%,
    /* Actually visible now */ rgba(157, 92, 255, 0.05) 25%,
    /* Can see it */ rgba(212, 76, 255, 0.02) 50%,
    transparent 70%
  );
  filter: blur(35px);
  mix-blend-mode: screen;
}

.cursor-glow-inner {
  width: 700px;
  height: 700px;
  background: radial-gradient(
    circle at center,
    rgba(212, 76, 255, 0.12) 0%,
    /* Noticeable but subtle */ rgba(157, 92, 255, 0.06) 35%,
    transparent 65%
  );
  filter: blur(20px);
  mix-blend-mode: overlay;
}

.cursor-glow-spot {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at center,
    rgba(255, 202, 29, 0.15) 0%,
    /* Yellow actually shows */ rgba(212, 76, 255, 0.08) 50%,
    transparent 75%
  );
  filter: blur(12px);
  mix-blend-mode: lighten;
}

/* Show on hover */
body:hover .cursor-glow {
  opacity: 0.3;
}

/* Subtle pulse animation */
@keyframes cursorPulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.03);
  }
}

.cursor-glow-outer {
  animation: cursorPulse 4s ease-in-out infinite;
}

.cursor-glow-inner {
  animation: cursorPulse 3s ease-in-out infinite 0.2s;
}

.page-wrapper {
  background-color: $secondary;

  .custom-navbar {
    top: 0;
    height: 100px;
    padding: 0 50px;
    position: sticky;
    z-index: 1500;
    background-color: $secondary;
    // box-shadow: 0 4px 12px rgba(212, 76, 255, 0.3);

    // a.navbar-brand {
    .svg-icon {
      display: inline-block;
      position: relative;

      &:hover {
        --start: 1; /* custom property becomes the trigger */

        :v-deep(svg.logo-svg) {
          transform: scale(1.05);
          animation: flip3D 1.5s ease-in-out calc(var(--start) * 1.6s) forwards;

          .logo-ring {
            stroke: $primary-light;
            stroke-width: 5;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation:
              drawRing 1.4s ease-in-out calc(var(--start) * 0s) forwards,
              neonPulse 1.5s ease-in-out infinite calc(var(--start) * 1.4s);
            transform: rotate(180deg) scale(1.1);
          }

          .logo-v {
            fill: $primary-light;
            transform: translateY(-2px);
            animation: bounceV 0.6s ease calc(var(--start) * 0.2s);
          }

          .logo-circle {
            fill: $primary-light;
            transform: scale(1.1);
            animation: pulseCircle 1s ease-in-out calc(var(--start) * 0.3s);
          }
        }
      }
      svg.logo-svg {
        width: 55px;
        height: 55px;
        cursor: pointer;
        transition: transform 0.3s ease;
        perspective: 1000px;

        .logo-ring {
          stroke: $primary;
          stroke-width: 4;
          fill: none;
          transform-origin: center;
          filter: drop-shadow(0 0 6px $primary-light);
          animation: neonPulse 1.5s ease-in-out infinite;
          // transition: all 0.4s ease;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .logo-v,
        .logo-circle {
          fill: $primary;
          transition: all 0.4s ease;
        }
      }
    }

    button.navbar-toggler {
      box-shadow: none !important;

      span.navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
      }
    }

    .navbar-collapse {
      flex-grow: unset;

      &.show {
        padding: 20px;
        margin-top: 35px;
        border-radius: 0 0 10px 10px;
        background-color: $secondary;
        box-shadow: 0 4px 12px rgba(212, 76, 255, 0.3);
      }

      .navbar-nav {
        z-index: 1000;
        position: relative;
        counter-reset: item;
        background-color: $secondary;

        .nav-link:not(.btn) {
          @include dynamic-text(500, 13px, #ccd6f6);

          &:hover,
          &.active {
            color: $primary;
          }

          &::before {
            margin-right: 5px;
            counter-increment: item;
            content: '0' counter(item) '.';
            @include dynamic-text(500, 12px, $primary);
          }
        }

        .nav-link.btn {
          width: 81px;
          height: 38px;
          margin-left: 15px;
          border: 1px solid $primary;
          @include translate-btn();
          @include dynamic-text(500, 13px, $primary, $line-height: 1);

          @media (max-width: 992px) {
            margin-top: 15px;
            margin-left: unset;
          }
        }
      }
    }
  }
}
</style>
