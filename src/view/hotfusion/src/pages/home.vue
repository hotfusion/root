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
        <button>Contact Us</button>
      </div>
    </swiper-slide>
    <swiper-slide class="second-floor"></swiper-slide>
  </swiper>
</template>