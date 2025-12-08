<template>
  <section id="hero">
    <h1 class="title">Hi, my name is</h1>
    <h2 class="h-lg">Victory Okon.</h2>
    <h3 class="h-lg">I build things for the web.</h3>
    <p>
      I’m a software engineer specializing in building (and occasionally designing) exceptional
      digital experiences. Currently, I’m focused on building accessible, human-centered products at
      <a href="https://ozitechgroup.com/" target="_blank" rel="noreferrer">Ozitech</a>.
    </p>

    <a href="mailto:etangdgm001@gmail.com" target="_blank" class="btn cta">
      Check out my resume!
    </a>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

#hero {
  h1.title {
    @include dynamic-text(400, 16px, $primary);
  }
  h2 {
    line-height: 1.1;
    color: #ccd6f6 !important;
    margin: clamp(15px, 2.1vw, 30px) 0 5px;
  }

  h3 {
    font-size: 70px !important;
  }
  .h-lg {
    @include dynamic-text(600, 80px, #8892b0, var(--font-sans));

    @media (max-width: 578px) {
      // @include dynamic-text(600, clamp(40px, 5.6vw, 80px), #8892b0);
      @include dynamic-text(600, clamp(70px, 5.6vw, 80px), #8892b0);
    }
  }
  p {
    max-width: 540px;
    margin: 20px 0px 0px;
    @include dynamic-text(400, 18px, #8892b0, null, 1.3);
    // @include dynamic-text(400, 20px, #8892b0);
    font-family:
      'Calibre',
      'Inter',
      'San Francisco',
      'SF Pro Text',
      -apple-system,
      system-ui,
      sans-serif;

    a {
      @include underline-link();
    }
  }

  a.btn.cta {
    height: 55px;
    max-width: 230px;
    margin-top: 50px;
    border: 1px solid $primary;
    @include translate-btn();
    @include dynamic-text(400, 16px, $primary, $line-height: 1);
  }
}
</style>
