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
  }),
  methods : {
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
        <Home></Home>
      </swiper-slide>
      <swiper-slide>
        <Aboutus :parentIndex="activeIndex"/>
      </swiper-slide>
      <swiper-slide>
        <PriceList></PriceList>
      </swiper-slide>
      <swiper-slide>
        <Contactus :enable="activeIndex === 3"></Contactus>
      </swiper-slide>
    </swiper>
  </container>
</template>
