<script lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import * as KUTE from "kute.js";
export default {
  props : ['parentIndex'],
  data : () => ({
    activeIndex:0,
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
        let p = [...this.$el.querySelectorAll('.paragraph')];

        p.forEach((x, i) => {
          if (i === e.activeIndex) {

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
  watch : {
    'parentIndex'(){
      setTimeout(() => {
        this.onSlideChange({activeIndex:this.activeIndex});
      },100)
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
  <swiper  :pagination="true" direction="vertical" style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide>
      <div class="paragraph" center>
        <div class="icon">
          <div class="cube"></div>
          <div class="circle"></div>
          <div class="triangle"></div>
          <i class="fas fa-briefcase"></i>
        </div>
        <h1 value="We ar affordable"></h1>
        <p>
          Sometimes the budget for your project has limits and you need a quick solution and and not expensive.
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>