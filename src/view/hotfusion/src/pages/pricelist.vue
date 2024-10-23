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
          <i class="fas fa-cash-register"></i>
        </div>
        <h1 value="How much our service cost?"></h1>
        <p>
          We offer a flexible pricing structure, ranging from $30 to $250 per hour, depending on the complexity of the problem and the solution needed. This ensures that you get the right level of service tailored to your specific requirements.
        </p>
      </div>
      <div style="height: 100%">
        <button>
          Get a Quote
        </button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="paragraph" center>
        <div class="icon">
          <div class="cube"></div>
          <div class="circle"></div>
          <div class="triangle"></div>
          <i class="fas fa-money-check-alt"></i>
        </div>
        <h1 value="Basic Support and Maintenance <br>($30 - $60/hour)"></h1>
        <p>Ideal for minor website updates, troubleshooting, and general maintenance tasks. Perfect for keeping your existing platform running smoothly.</p>
      </div>
      <div style="height: 100%">
        <button>
          Get a Quote
        </button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="paragraph" center>
        <div class="icon">
          <div class="cube"></div>
          <div class="circle"></div>
          <div class="triangle"></div>
          <i class="fas fa-wallet"></i>
        </div>
        <h1 value="Standard Development and Integration <br>($70 - $150/hour)"></h1>
        <p>Suitable for building new website features, setting up e-commerce platforms, or integrating third-party payment solutions. This level covers most standard development needs.</p>
      </div>
      <div style="height: 100%">
        <button>
          Get a Quote
        </button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="paragraph" center>
        <div class="icon">
          <div class="cube"></div>
          <div class="circle"></div>
          <div class="triangle"></div>
          <<i class="fas fa-cash-register"></i>
        </div>
        <h1 value="Advanced Custom Solutions and Consulting <br>($160 - $250/hour)"></h1>
        <p>For complex custom application development, enterprise-level integrations, or high-level consulting. This tier addresses challenging projects requiring specialized skills and expertise.</p>
      </div>
      <div style="height: 100%">
        <button>
          Get a Quote
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>