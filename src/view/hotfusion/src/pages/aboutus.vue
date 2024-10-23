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
            <i class="fas fa-briefcase"></i>
          </div>
          <h1 value="What can we do?"></h1>
          <p>
            We can set up essential online tools for your office to meet your daily business needs. Our services include managing your domain name server, email server, hosting, and—most importantly—providing 24/7 security and support. You focus on your work, and we’ll handle the maintenance.
          </p>
        </div>
        <div style="height: 100%">
          <button>
            Contact Us
          </button>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="paragraph" center>
          <div class="icon">
            <i class="fas fa-globe"></i>
          </div>
          <h1 value="We can maintain your online infrastructure!"></h1>
          <p>
            We understand the importance of your online presence. Our team can manage your website and mobile app environments, ensuring everything runs smoothly. We also handle domain name servers and offer reliable support with secure services to keep your digital operations safe and efficient.
          </p>
        </div>
        <div style="height: 100%">
          <button>
            Contact Us
          </button>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="paragraph" center>
          <div class="icon">
            <i class="fas fa-mail-bulk"></i>
          </div>
          <h1 value="We can fix your email problems!"></h1>
          <p>
            Need reliable email support for your business? We offer robust solutions tailored to your needs, whether you're looking for cloud-based or dedicated options. Our expertise spans popular providers like Office 365, Bluehost, GoDaddy, and many more. Let us help you keep your communication seamless and secure.
          </p>
        </div>
        <div style="height: 100%">
          <button>
            Contact Us
          </button>
        </div>
      </swiper-slide>
    </swiper>
</template>