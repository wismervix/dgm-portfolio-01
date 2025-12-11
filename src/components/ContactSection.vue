<template>
  <section id="contact">
    <h2 class="numbered-heading">What’s Next?</h2>
    <h2 class="title">Get In Touch</h2>
    <p class="m-0">
      Although I’m not currently looking for any new opportunities, my inbox is always open. Whether
      you have a question or just want to say hi, I’ll try my best to get back to you!
    </p>
    <a
      class="contact btn"
      href="mailto:brittany.chiang@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
      >Say Hello</a
    >
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#contact {
  max-width: 600px;
  text-align: center;
  margin: 0 auto 100px;

  .title {
    margin: 0 0 10px;
    @include dynamic-text(600, clamp(35px, 5vw, 60px), #ccd6f6);
    line-height: 1.1;

    + p {
      @include dynamic-text(400, 16px, #8892b0, $line-height: 1.3);
    }
  }

  a.contact.btn {
    width: 135px;
    height: 55px;
    margin: 50px auto 0;
    border: 1px solid $primary;
    @include dynamic-text(500, 13px, $primary, $line-height: 1);
    @include translate-btn();
  }
}
</style>
