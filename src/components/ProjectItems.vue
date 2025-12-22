<template>
  <ul class="project-list">
    <li v-for="project in myProjects" :key="project.id">
      <div class="project-img-wrapper">
        <div class="project-img-bg" :style="{ '--project-image': `url(${project.image})` }"></div>
      </div>
      <div class="project-content">
        <p class="project-overline">Featured Project</p>
        <h3 class="project-title">
          <a :href="project.title.route" rel="noopener noreferrer" target="_blank">
            {{ project.title.name }}
          </a>
        </h3>
        <div class="project-description">
          <p>
            {{ project.description }}
            <template v-if="project.links">
              <template v-for="(link, i) in project.links" :key="i">
                <a :href="link.route" target="_blank" rel="noopener noreferrer">
                  {{ link.title }}
                </a>
                <template v-if="i < project.links.length - 2">, </template>
                <template v-else-if="i === project.links.length - 2"> and </template>
              </template>
            </template>
          </p>
        </div>
        <ul class="project-tech-list">
          <li v-for="(tech, i) in project.technologies" :key="i">{{ tech }}</li>
        </ul>
        <div class="project-links">
          <a
            v-for="(platformLink, i) in project.platformLinks"
            :key="i"
            :href="platformLink.route"
            :aria-label="platformLink.title"
            rel="noopener noreferrer"
            target="_blank"
          >
            <template v-if="platformLink.icon">
              <SvgIcons :name="platformLink.icon" />
            </template>
            <!-- <SvgIcons :name="platformLink.icon || 'logoIcon'" /> -->
          </a>
        </div>
      </div>
    </li>
  </ul>

  <button class="btn btn-others" @click="showOthers = true">Show Other Projects</button>

  <template v-if='showOthers'>
    <ul class="other-projects">
      <li class="hover-fade" v-for="project in otherProjects" :key="project.id">
        <a :href="project.title.route" rel="noopener noreferrer" target="_blank">
          {{ project.title.name }}
        </a>
        — Health & wellness multi-level platforms.
      </li>
    </ul>

  <button class="btn btn-others" @click="showOthers = false">Show less Projects</button>
  </template>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import SvgIcons from './SvgIcons.vue'
import { getProjectsByOthers, getMyProjects, type Project } from '../utils/data.ts'

const showOthers = ref(false);
const otherProjects = ref<Project[]>([])
const myProjects = ref<Project[]>([])

onMounted(() => {
  otherProjects.value = getProjectsByOthers()
  myProjects.value = getMyProjects()

  console.log('Other projects:', otherProjects.value)
  console.log('My projects:', myProjects.value)
})
</script>

<style scoped lang="scss">
.project-list {
  li {
    display: flex;
    overflow: hidden;
    max-width: 1000px;
    max-height: 362px;
    position: relative;
    margin: 0 auto 30px;

    @media (max-width: 700px) {
      max-height: 410px;
    }

    @media (max-width: 400px) {
      max-height: unset;
    }

    .project-img-wrapper {
      width: 580px;
      border-radius: 4px;

      .project-img-bg {
        width: 100%;
        height: 100%;
        min-height: 360px;
        position: relative;
        border-radius: 4px;
        transition: background 0.3s ease;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: var(--project-image);

        // background: url('@/assets/images/project-1.avif') center / 100% 100%;

        &::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          mix-blend-mode: screen;
          // mix-blend-mode: multiply;
          filter: grayscale(20%) contrast(4) brightness(70%);
          // filter: grayscale(100%) contrast(1) brightness(90%);
          background: #9d5cff;
          transition: opacity 0.3s ease;
        }

        @media (max-width: 700px) {
          min-height: 407px;
          background-image: linear-gradient(#1b1530dc, #1b1530dc), var(--project-image);
          // background:
          //   linear-gradient(#1b1530dc, #1b1530dc),
          //   url('@/assets/images/project-1.avif') center / 100% 100%;

          &::after {
            display: none;
          }
        }

        @media (max-width: 400px) {
          min-height: clamp(410px, calc(65vh + (500px - 100vw) * 0.3), 500px);
        }

        @media (max-width: 355px) {
          min-height: clamp(410px, calc(70vh + (500px - 100vw) * 0.3), 500px);
        }
      }

      &:hover .project-img-bg::after {
        opacity: 0; // fade overlay smoothly
      }
    }

    .project-content {
      top: 0;
      right: 0;
      width: 495px;
      text-align: end;
      position: absolute;

      @media (max-width: 700px) {
        inset: 0;
        height: 90%;
        margin: auto;
        width: 90% !important;
      }

      .project-overline {
        margin: 10px 0;
        @include dynamic-text(400, 13px, $primary);
      }

      .project-title {
        line-height: 1.1;
        margin: 0 0 20px;

        a {
          transition: var(--transition);
          @include dynamic-text(600, clamp(24px, 5vw, 28px), #ccd6f6);

          &:hover {
            color: $primary;
          }
        }
      }

      .project-description {
        z-index: 2;
        padding: 25px;
        border-radius: 15px;
        position: relative;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background-color: rgba($primary-alt, 0.5);
        transition: var(--transition);
        box-shadow: 0 5px 15px -8px $primary-alt;
        @include dynamic-text(400, 15px, #a8b2d1, var(--font-sans));

        p {
          margin: 0;
          line-height: 1.3;

          a {
            @include underline-link();
          }
        }

        &:hover {
          box-shadow: 0 10px 20px -10px rgba($primary-alt, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      }

      .project-links,
      .project-tech-list {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: flex-end;
      }
      .project-tech-list {
        z-index: 2;
        margin: 25px 0 10px;

        li {
          margin: 0 0 5px 20px;
          white-space: nowrap;
          @include dynamic-text(400, 13px, #a8b2d1, $line-height: 1.3);
        }
      }

      .project-links {
        margin-top: 10px;
        align-items: center;

        a {
          z-index: 1;
          padding: 10px;
          color: #ccd6f6;
          position: relative;
          @include centered();

          &:hover {
            color: $primary;
          }

          :deep(svg) {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      .project-content {
        top: 0;
        left: 0;
        width: 495px;
        text-align: start;

        .project-tech-list {
          justify-content: flex-start;

          li {
            margin: 0 20px 5px 0;
          }
        }

        .project-links {
          justify-content: flex-start;

          a {
            &:first-child {
              padding: 10px 10px 10px 0;
            }
          }
        }
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 100px;
    }
  }
}

.btn-others {
  margin: 50px 0;
  width: fit-content;
  display: inline-block;
  color: $primary !important;
  text-transform: capitalize;
  border: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    opacity: 0.5;
    bottom: -0.037em;
    display: block;
    position: relative;
    background-color: $primary;
  }

  &:hover {
    border: 1px solid $primary;

    &::after {
      display: none;
    }
  }
}

.other-projects {
  li.hover-fade {
    max-width: 550px;
    position: relative;
    padding: 10px 10px 10px 30px;
    border-radius: 6px;
    transition: all 0.4s ease;
    background-color: rgba(212, 76, 255, 0);
    @include dynamic-text(400, 16px, #8892b0);

    &::before {
      content: '▹';
      left: 10px;
      // left: 0px;
      color: $primary;
      position: absolute;
    }

    &:hover {
      transform: scale(1.05);
      background-color: rgba(213, 76, 255, 0.07);
    }

    a {
      transition: var(--transition);

      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
