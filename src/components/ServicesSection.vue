<template>
  <section id="services">
    <h2 class="services-title">What I Do</h2>

    <div class="services-outer-wrapper">
      <div class="services-wrapper">
        <div class="row">
          <div class="col-md-6">
            <div class="e-service">
              <div class="service-heading">
                <SvgIcons name="webDev" fill="none" />

                <div class="service-name">Web Dev</div>
              </div>
              <p class="service-content">
                I build fast, reliable, and scalable web applications using modern frontend
                technologies. My focus is on writing clean, maintainable code while translating
                designs into responsive, high-quality user experiences that work seamlessly across
                devices.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="e-service">
              <div class="service-heading">
                <SvgIcons name="uiDesign" />

                <div class="service-name">UI/UX Design</div>
              </div>
              <p class="service-content">
                <b class="fst-italic">“Great UI shouldn't need a manual.”</b>
                I focus on designing intuitive, user-friendly interfaces that balance aesthetics
                with usability, ensuring smooth and consistent experiences across devices.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="e-service">
              <div class="service-heading">
                <SvgIcons name="digitalMarketing" />

                <div class="service-name">Digital Marketing</div>
              </div>
              <p class="service-content">
                I drive digital growth through strategic SEO, social media, and content marketing.
                By combining audience insights with performance tracking, I help brands improve
                visibility, engagement, and conversion outcomes across digital channels.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="e-service">
              <div class="service-heading">
                <SvgIcons name="graphicDesign" />

                <div class="service-name">Graphic Design</div>
              </div>
              <p class="service-content">
                I create clean, purposeful visuals that support your brand’s identity. Whether it’s
                branding assets, marketing materials, or digital graphics, my goal is to communicate
                ideas clearly while leaving a strong visual impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SvgIcons from './SvgIcons.vue'
</script>

<style scoped lang="scss">
#services {
  .services-title {
    width: fit-content;
    margin-bottom: 40px;
    @include dynamic-text(500, 22px, #ccd6f6, var(--font-sans));

    &::after {
      content: '';
      width: 100%;
      // height: 3px;
      display: block;
      margin-top: 5px;
      // background-color: $primary;
      height: 20px;

      background-image: url("data:image/svg+xml,%3Csvg%20viewBox='0%200%20300%2020'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0%2010%20Q25%205%2050%2010%20T100%2010%20T150%2010%20T200%2010%20T250%2010%20T300%2010'%20stroke='%239d5cff'%20stroke-width='5'%20fill='none'/%3E%3C/svg%3E");

      background-position: 0 0;
      background-repeat: repeat-x;
      background-size: 300px 20px;
      animation: waveMove 4s linear infinite;
    }
  }

  .services-outer-wrapper {
    background: url('@/assets/images/services_bg-3.png') center / 100% 100% fixed;
    margin-inline: -100px;

    @media (max-width: 1080px) {
      margin-inline: -70px;
    }
    @media (max-width: 768px) {
      margin-inline: -60px;
    }
    @media (max-width: 480px) {
      margin-inline: -35px;
    }

    .services-wrapper {
      margin: auto;
      max-width: 85%;

      @media (max-width: 850px) {
        max-width: 80%;
      }

      @media (max-width: 650px) {
        max-width: 75%;
      }

      .col-md-6 {
        padding: 0;
        overflow: hidden;
        position: relative;

        /* Top-left service */
        &:nth-child(1) .e-service {
          border-bottom-right-radius: 20px;
          border-right: 1.5px solid $secondary;
          border-bottom: 1.5px solid $secondary;

          &:hover {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            animation: liftAndShake 0.6s ease forwards;
            box-shadow:
              0 15px 35px rgba(0, 0, 0, 0.4),
              0 5px 15px rgba(#d44cff, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 768px) {
            border-right: 3px solid $secondary;
            border-bottom: 3px solid $secondary;

            &:hover {
              animation: pressAndShake 0.6s ease forwards;
            }
          }
        }

        /* Top-right service */
        &:nth-child(2) .e-service {
          border-bottom-left-radius: 20px;
          border-left: 1.5px solid $secondary;
          border-bottom: 1.5px solid $secondary;

          &:hover {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            animation: liftAndShake 0.6s ease forwards;
            box-shadow:
              0 15px 35px rgba(0, 0, 0, 0.4),
              0 5px 15px rgba(#d44cff, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 768px) {
            border-bottom: 0 !important;
            border-bottom-left-radius: 0;
            border-left: 3px solid $secondary;

            &:hover {
              animation: pressAndShake2 0.6s ease forwards;
            }
          }
        }

        /* Bottom-left service */
        &:nth-child(3) .e-service {
          border-top-right-radius: 20px;
          border-top: 1.5px solid $secondary;
          border-right: 1.5px solid $secondary;

          &:hover {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            animation: liftAndShake2 0.6s ease forwards;
            box-shadow:
              0 15px 35px rgba(0, 0, 0, 0.4),
              0 5px 15px rgba(#d44cff, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 768px) {
            border-top: 3px solid $secondary;
            border-right: 3px solid $secondary;

            &:hover {
              animation: pressAndShake2 0.6s ease forwards;
            }
          }
        }

        /* Bottom-right service */
        &:nth-child(4) .e-service {
          border-top-left-radius: 20px;
          border-left: 1.5px solid $secondary;
          border-top: 1.5px solid $secondary;

          &:hover {
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            animation: liftAndShake2 0.6s ease forwards;
            box-shadow:
              0 15px 35px rgba(0, 0, 0, 0.4),
              0 5px 15px rgba(#d44cff, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }

          @media (max-width: 768px) {
            border-left: 3px solid $secondary;
            border-top: 3px solid $secondary;

            &:hover {
              animation: pressAndShake2 0.6s ease forwards;
            }
          }
        }
      }

      .e-service {
        height: 100%;
        position: relative;
        padding: 1rem 15px 20px 25px;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba($primary, 0.02) 0%, transparent 50%);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        &:hover {
          &::before {
            opacity: 1;
          }

          :deep(.service-heading svg) {
            transform: scale(1.1) rotate(5deg);
            filter: drop-shadow(0 0 8px rgba($primary, 0.3));
          }
        }

        .service-heading {
          gap: 20px;
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          :deep(svg) {
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

            :deep(path),
            :deep(circle) {
              transition: all 0.4s ease;
            }
          }

          .e-service:hover & {
            :deep(svg) {
              transform: scale(1.15);
              filter: drop-shadow(0 0 12px rgba($primary, 0.4));

              :deep(path) {
                stroke: $primary;
                stroke-width: 2.5;
              }

              :deep(circle) {
                fill: $primary;
                transform: scale(1.2);
              }
            }
          }

          .service-name {
            text-transform: uppercase;
            @include dynamic-text(500, 30px, #fff);
            position: relative;
            display: inline-block;

            /* Actually visible gradient text */
            background: linear-gradient(90deg, #fff 0%, $primary-light 50%, #fff 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textShine 3s ease-in-out infinite;

            &::after {
              content: '';
              position: absolute;
              bottom: -8px;
              left: 0;
              width: 0;
              height: 3px;
              background: linear-gradient(90deg, $primary, $primary-light, $primary);
              transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            .e-service:hover &::after {
              width: 100%;
            }

            @media (max-width: 850px) {
              @include dynamic-text(500, 20px, $grey);
            }
          }
        }

        .service-content {
          @include dynamic-text(400, 18px, $grey, $line-height: 1.4);

          @media (max-width: 850px) {
            @include dynamic-text(500, 14px, $grey);
          }
        }
      }
    }
  }
}
</style>
