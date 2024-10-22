<script lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
export default {
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
    <swiper :pagination="true" direction="vertical" style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide>
        <div class="paragraph" center>
          <h1>What can we do?</h1>
          <p>
            We can set up essential online tools for your office to meet your daily business needs. Our services include managing your domain name server, email server, hosting, and—most importantly—providing 24/7 security and support. You focus on your work, and we’ll handle the maintenance.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="paragraph" center>
          <h1>We can fix your email problems!</h1>
          <p>
            Do you need a solid email support for your business? We provide solutions either for cloud solution or dedicated solution.
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </container>
</template>