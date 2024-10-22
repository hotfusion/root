<script lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Aboutus from "./aboutus.vue";
import Contactus from "./contactus.vue";
import * as KUTE from 'kute.js'
export default {
  components : {Contactus, Aboutus},
  data : () => ({
    activeIndex: 0,
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y
    ],
  }),
  methods : {
    onSlideChange(e){
      this.activeIndex = e.activeIndex;
      setTimeout(() => {
        let p = [...this.$refs.container.children];
        p.forEach((x,i) => {
          if(i === e.activeIndex){
            let element = x.querySelector('h1');
            element.innerHTML = '';
            KUTE.default.to(element, {text: element.getAttribute('value')}).start();
          }

        })
      })
    },
    onSwiper(){

    }
  },
  mounted() {
    setTimeout(() => {
      this.onSlideChange({activeIndex:this.activeIndex});
    },100)
  }
}
</script>

<template>
  <container ref="container">
    <swiper :pagination="true"  style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide>
        <div class="paragraph" center ref="paragraph">
          <h1 value="HotFusion.com"></h1>
          <p>
            HotFusion is an IT company with 15 years of experience, specializing in building and maintaining infrastructure for small to medium-sized businesses. We focus on delivering reliable support and solutions to keep your operations running smoothly.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <Aboutus :parentIndex="activeIndex"/>
      </swiper-slide>
      <swiper-slide>
        <Contactus v-if="activeIndex === 2" :parentIndex="activeIndex"></Contactus>
      </swiper-slide>
    </swiper>
  </container>
</template>