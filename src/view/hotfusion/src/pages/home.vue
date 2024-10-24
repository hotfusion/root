<script lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import * as KUTE from "kute.js";
export default {
  data : () => ({
    activeIndex: 0,
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y
    ]
  }),
  methods : {
    onSlideChange(e){
      this.activeIndex = e.activeIndex;
      setTimeout(() => {
        console.log(this.$el)
        let p
            = [...this.$el.querySelectorAll('.swiper-slide')];

        let triangle
            = p[0].querySelector('.triangle');

        KUTE.default.fromTo(triangle,{rotate:0},{rotate:-720});

        p.forEach((x,i) => {
          if(i === e.activeIndex){
            let element
                = x.querySelector('h1');

            element
                .innerHTML = '';

            KUTE.default.to(element, {
              text : element.getAttribute('value')
            }).start();

          }
        })
      })
    }
  },
}
</script>

<template>
  <swiper :pagination="true" direction="vertical"  style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide>
      <div class="paragraph" center ref="paragraph">
        <div class="icon">
          <i class="fas fa-server"></i>
        </div>
        <h1 value="HotFusion.ca"></h1>
        <div class="line"></div>
        <p>
          HotFusion is an IT company with 15 years of experience, specializing in building and maintaining infrastructure for small to medium-sized businesses. We focus on delivering reliable support and solutions to keep your operations running smoothly.
        </p>
      </div>
      <div style="height: 100%">
        <button v-on:click="$emit('goto','contactus')">
          <i class="fas fa-angle-right"></i>
          Contact Us
        </button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="paragraph" center ref="paragraph">
        <div class="icon">
          <i class="fas fa-glasses"></i>
        </div>
        <h1 value="Who we are?"></h1>
        <div class="line"></div>
        <p>
          We are a passionate team of developers who love to code and contribute. For us, coding isn’t just a job—it’s an art form. While we value our professional work, we also enjoy giving back and contributing to the community whenever we can.
        </p>
      </div>
      <div style="height: 100%">
        <button v-on:click="$emit('goto','contactus')">
          <i class="fas fa-angle-right"></i>
          Contact Us
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>