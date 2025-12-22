<template>
  <section id="about">
    <h2 class="numbered-heading">About Me</h2>
    <div class="row g-5 inner">
      <div class="col-lg-8 col-md-7">
        <div class="text-cont">
          <p>
            Hi, I’m Victory — a frontend developer who enjoys using technology to solve real
            problems and create clean, user-focused web experiences.
          </p>
          <br />

          <p>
            I began my journey in late 2023 as a trainee at
            <a href="https://ozitechgroup.com/" target="_blank" rel="noopener noreferrer">Ozitech</a
            >, where I built strong fundamentals and worked on real-world projects. I transitioned
            into a Frontend Developer role in July 2024 and have since contributed to multiple
            production-ready applications across different industries.
          </p>
          <br />

          <p>
            I specialize in
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
              <strong>Vue</strong>
            </a>
            and
            <a href="https://angular.dev/" target="_blank" rel="noopener noreferrer">
              <strong>Angular</strong> </a
            >, and regularly work with
            <strong>
              <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">Laravel</a>
              +
              <a href="https://inertiajs.com/" target="_blank" rel="noopener noreferrer">
                Inertia
              </a> </strong
            >,
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              <strong>Sass</strong> </a
            >,
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              <strong>Tailwind</strong> </a
            >, and
            <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer">
              <strong>WordPress</strong> </a
            >. I collaborate closely using
            <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a>
            and ship projects with tools like
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"> Git </a>,
            <a href="https://www.apachefriends.org/" target="_blank" rel="noopener noreferrer"
              >Xampp</a
            >,
            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
              Firebase </a
            >, and
            <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"> Vercel </a>.
          </p>
        </div>
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
      max-width: 230px;
      // max-width: 300px;
      position: relative;
      border-radius: 4px;
      border: 2px solid $primary;
      transition:
        transform 0.3s ease,
        background 0.3s ease;

      .img-bg {
        // padding-top: 100%;
        padding-top: 130%;
        position: relative;
        border-radius: 4px;
        background: url('@/assets/images/d_g_m.jpg') center / 100% 100%;
        // background: url('@/assets/images/portfolio-profile.avif') center / 100% 100%;

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
