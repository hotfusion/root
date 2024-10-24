<script  lang="ts">
import Home from "./pages/home.vue"
import Contactus from "./pages/contactus.vue";
import PriceList from "./pages/pricelist.vue";
import Aboutus from "./pages/aboutus.vue";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import * as KUTE from "kute.js";
export default {
  components: {Aboutus, PriceList, Contactus, Home},
  data : () => ({
    activeIndex: 0,
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y
    ],
    swiper : false
  }),
  methods : {
    onSwiper(e){
      this.swiper = e;
    },
    onSlideChange(e){
      this.activeIndex = e.activeIndex;
      setTimeout(() => {
        let p
            = [...this.$refs.container.children];


        let triangle
            = p[0].querySelector('.triangle');

        // console.log(triangle);
        //  if(triangle)
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
    },
    goTo(e){
      if(e === 'contactus')
        this.swiper.slideTo(4);
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
    <swiper @swiper="onSwiper" :pagination="true"  style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" @slideChange="onSlideChange">
      <swiper-slide>
        <Home  v-on:goto="goTo"></Home>
      </swiper-slide>
      <swiper-slide>
        <Aboutus v-on:goto="goTo" :parentIndex="activeIndex"/>
      </swiper-slide>
      <swiper-slide>
        <PriceList  v-on:goto="goTo"></PriceList>
      </swiper-slide>
      <swiper-slide>
        <Contactus  v-on:goto="goTo" @completed="swiper.slideTo(1)" :enable="activeIndex === 3"></Contactus>
      </swiper-slide>
    </swiper>
  </container>
</template>
