<script lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Aboutus from "./aboutus.vue";
export default {
  components : {Aboutus},
  data : () => ({
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y
    ],
  }),
  methods : {
    onSlideChange(){

    },
    onSwiper(){

    }
  }
}
</script>

<template>
  <container>
    <swiper :pagination="true"  style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide>
        <div class="paragraph" center>
          <h1>HotFusion.com</h1>
          <p>
            HotFusion is an IT company with 15 years of experience, specializing in building and maintaining infrastructure for small to medium-sized businesses. We focus on delivering reliable support and solutions to keep your operations running smoothly.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <Aboutus/>
      </swiper-slide>
    </swiper>
  </container>
</template>