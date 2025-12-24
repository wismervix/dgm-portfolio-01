<template>
  <section id="experience">
    <h2 class="numbered-heading">Experience</h2>
    <p>
      I've been doing web development for about 3 years now, and I'm always eager to learn more in
      this fast paced industry.
    </p>
    <div class="grey-bg row">
      <div class="col-md-6">
        <h3 class="col-title">Some technologies I've worked with:</h3>
        <div class="row skill-icons">
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/html.png" alt="" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/css.png" id="css" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/sass.png" id="sass" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/js.png" id="js" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/java.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/python.png" id="python" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/jquery.png" id="jquery" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/bootstrap.png" id="bootstrap" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/foundation.png" id="foundation" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/angular.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/node.png" id="node" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/mongodb.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/github.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/photoshop.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/indesign.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/jira.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/linux.png" />
          </div>
          <div class="col-3 col-md-2 skill-icon">
            <img src="@/assets/icons/tumblr.png" />
          </div>
        </div>
        <div class="page-bg">
          <div class="content-wrapper">
            <h3 class="mb-1">
              <span>Front-end Engineer </span>
              <span><a href="">@ Ozitech</a></span>
            </h3>

            <p class="range">November 2023 - Present</p>

            <ul>
              <li class="hover-fade">
                Develop and maintain large-scale web applications, dashboards, trading platforms,
                CRMs, and automation tools.
              </li>
              <li class="hover-fade">
                Collaborate with backend teams, UI/UX teams, and product managers to deliver
                pixel-perfect, responsive UI components.
              </li>
              <li class="hover-fade">
                Build reusable components using Vue, Angular, Sass, Tailwind, and Laravel + Inertia
                for production-ready environments.
              </li>
              <li class="hover-fade">
                Integrate APIs, implemented real-time UI updates, and optimize complex frontend
                logic for speed and clarity.
              </li>
              <li class="hover-fade">
                Contribute to dozens of projects back-to-back with strong reliability and rapid
                execution under tight delivery schedules.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h3 class="col-title">Skills:</h3>

        <div class="transition-all">
          <h4 class="c-list-title">
            <span class="sprite tools"><i class="fa-solid fa-screwdriver-wrench temp"></i></span
            >Tools
          </h4>
          <ul class="skills-list">
            <li>Git + GitHub</li>
            <li>Command Line</li>
            <li>Chrome DevTools</li>
            <li>Bitbucket</li>
            <li>Bash</li>
            <li>Docker</li>
            <li>Vercel</li>
            <li>Xampp</li>
            <li>Firebase</li>
            <li>Powershell</li>
          </ul>
        </div>
        <div class="transition-all">
          <h4 class="c-list-title"><span class="sprite knowledge"></span>Languages</h4>
          <ul class="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>PhP</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>CSS/Sass</li>
            <li>HTML</li>
          </ul>
        </div>
        <div class="transition-all">
          <h4 class="c-list-title"><span class="sprite design"></span>Design</h4>
          <ul class="skills-list">
            <li>Sketch</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Prototyping</li>
            <li>User Testing</li>
            <li>Canva</li>
          </ul>
        </div>
        <div class="transition-all">
          <h4 class="c-list-title"><span class="sprite dev"></span>Frameworks</h4>
          <ul class="skills-list">
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>Inertia</li>
            <li>Laravel</li>
            <li>WordPress</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#experience {
  // max-width: 700px;
  max-width: 800px;

  .numbered-heading + p {
    text-align: center;
    margin: 0 auto 40px;
    @include dynamic-text(400, 16px, #8892b0, $line-height: 1.3);

    + .grey-bg {
      padding: 20px 10px;
      border-radius: 8px;
      background-color: $grey;
      box-shadow: 0 4px 12px rgba(168, 178, 209, 0.35);
    }
  }

  .col-title {
    margin: 0 0 50px;
    text-transform: uppercase;
    @include dynamic-text(400, 18px, $tertiary-light, $line-height: 1.5);
  }

  .skill-icon {
    @include centered();
    padding: 0 15px 15px;

    img {
      margin: 0 auto;
      max-height: 120px;
      filter: grayscale(100%);
      transition: all 0.3s ease-in-out;
      max-width: clamp(40px, 3.5vw, 50px);

      &:hover {
        filter: none;
      }
    }
  }

  .c-list-title {
    gap: 10px;
    display: flex;
    align-items: center;
    @include dynamic-text(600, 16px, $tertiary-light);

    .sprite {
      top: 0;
      width: 20px;
      height: 20px;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100%;

      &.tools {
        background-size: 90%;
        background-image: url(..@/assets/icons/repair-tools.png);

        .temp {
          color: white;
        }
      }

      &.design {
        background-size: 90%;
        background-image: url(../assets/icons/design.png);
      }

      &.dev {
        background-image: url(../assets/icons/settings.png);
      }

      &.knowledge {
        margin-bottom: 4px;
        background-image: url(../assets/icons/light-bulb.png);
      }
    }
  }

  ul.skills-list {
    gap: 0 10px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 20px 0 0;
    max-width: 400px;

    li {
      flex: 1 1 140px;
      max-width: 200px;
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;
      @include dynamic-text(400, 13px, $tertiary-light);

      &::before {
        content: '▹';
        left: 0px;
        position: absolute;
        @include dynamic-text(400, 14px, $primary, $line-height: 12px);
      }
    }
  }

  .transition-all {
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 10px 10px 0;
    transition: all 0.4s ease;

    &:first-of-type {
      padding-top: 0 !important;
    }

    &:hover {
      transform: scale(1.05);
      background-color: rgba(30, 41, 59, 0.046);

      .c-list-title .sprite.tools {
        // background-image: url(../assets/icons/repair-tools-inverted.png);
        .temp {
          color: black;
        }
      }
      .c-list-title .sprite.design {
        background-image: url(../assets/icons/design-inverted.png);
      }
      .c-list-title .sprite.dev {
        background-image: url(../assets/icons/settings-inverted.png);
      }
      .c-list-title .sprite.knowledge {
        background-image: url(../assets/icons/light-bulb-inverted.png);
      }

      ul.skills-list li {
        @include dynamic-text(400, 13px, $primary);

        &::before {
          @include dynamic-text(400, 14px, $secondary);
        }
      }
    }
  }

  .page-bg {
    border-radius: 0 15px 0 0;
    background-color: $secondary;
    margin: 35px 0 -35px -33px;
    //   margin: 35px -10px -35px -33px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
      border-radius: 0 15px 15px 0;
    }

    .content-wrapper {
      padding: 1rem 0;
      line-height: 1.3;
      margin: 0 22px 0 33px;

      h3 {
        font-family: var(--font-sans);
        @include dynamic-text(500, 19px, #ccd6f6); //O.G fs - 22px

        a {
          @include underline-link();
        }
      }

      .range {
        margin-bottom: 25px;
        @include dynamic-text(400, 13px, #a8b2d1);
      }

      li {
        position: relative;
        padding: 10px 10px 10px 30px;
        transition: transform 0.4s ease;

        @include dynamic-text(400, 16px, #8892b0);

        &::before {
          content: '▹';
          left: 10px;
          color: $primary;
          position: absolute;
        }
      }
    }
  }

  .hover-fade {
    border-radius: 6px;
    transition: background-color 0.2s ease;
    background-color: rgba(212, 76, 255, 0);

    &:hover {
      transform: scale(1.05);
      background-color: rgba(213, 76, 255, 0.07);
    }
  }
}
</style>
