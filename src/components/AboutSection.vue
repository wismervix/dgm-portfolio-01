<template>
  <section id="about">
    <h2 class="numbered-heading">About Me</h2>
    <div class="row g-5 inner">
      <div class="col-lg-8 col-md-7">
        <div class="text-cont">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My
            interest in web development started back in 2012 when I decided to try editing custom
            Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
            HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at
            <a href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank"
              >an advertising agency</a
            >,
            <a href="https://starry.com/" rel="noopener noreferrer" target="_blank">a start-up</a>,
            <a href="https://www.apple.com/" rel="noopener noreferrer" target="_blank"
              >a huge corporation</a
            >, and
            <a href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer" target="_blank"
              >a student-led design studio</a
            >. My main focus these days is building accessible, inclusive products and digital
            experiences at
            <a href="https://upstatement.com/" rel="noopener noreferrer" target="_blank"
              >Upstatement</a
            >
            for a variety of clients.
          </p>
          <!-- <p>
                  Here are a few technologies I’ve been working with recently:
                </p> -->
        </div>
        <!-- <ul class="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Eleventy</li>
                <li>WordPress</li>
              </ul> -->
      </div>
      <div class="col-lg-4 col-md-5">
        <div class="left-img-wrapper">
          <div class="img-bg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#about {
  max-width: 900px;

  .inner {
    align-items: center;

    .text-cont {
      max-width: 510px;
      @include dynamic-text(400, 16px, #8892b0, $line-height: 1.3);

      a {
        @include underline-link;
      }
    }

    .left-img-wrapper {
      width: 100%;
      max-width: 300px;
      position: relative;
      border-radius: 4px;
      border: 2px solid $primary;
      transition:
        transform 0.3s ease,
        background 0.3s ease;

      .img-bg {
        padding-top: 100%;
        position: relative;
        border-radius: 4px;
        background: url('@/assets/images/portfolio-profile.avif') center / 100% 100%;

        transform: translate(-14px, -14px);
        transition:
          transform 0.3s ease,
          background 0.3s ease;

        &::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #9d5cff;
          border-radius: inherit;
          mix-blend-mode: multiply;
          transition: opacity 0.3s ease;
        }
      }

      &:hover {
        transform: translate(-4px, -4px);
        border: 2px solid $primary-light;

        .img-bg {
          transform: translate(-18px, -18px);
        }
      }

      &:hover .img-bg::after {
        opacity: 0; // fade overlay smoothly
      }
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
}
</style>
