<script  lang="ts">
import {Fetch,Layout,Component,Components, Element, Warning} from "@hotfusion/ui"
import * as KUTE from "kute.js";
import {SwiperSlide} from "swiper/vue";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
export default {
  components: {SwiperSlide},
  props:['enable'],
  data : () => ({
    Layout : new Layout('main'),
    activeIndex: 0,
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y
    ]
  }),
  methods: {
    onSwiper(swiper){
      this.swiper = swiper;
    },
    close(){
      this.swiper.allowSlideNext = true;
      this.swiper.allowSlidePrev = true;
      this.swiper.slideTo(0);
      this.swiper.allowSlideNext = false;
      this.swiper.allowSlidePrev = false;
      this.$emit('completed')
    },
    onSlideChange(e){
      setTimeout(() => {
        let p = [...this.$el.querySelectorAll('.paragraph')];

        p.forEach((x, i) => {

            let element = x.querySelector('h1');
            if(element){
              element.innerHTML = '';
              KUTE.default.to(element, {text: element.getAttribute('value')}).start();
            }

        })
      })
    }
  },
  mounted() {
    this.Layout.push(
        new Component( Components.form,{
          elements : [
            new Element('input')
                .setId('name')
                .setValue('')
                .setLabel('Full Name')
                .setIcon('fas fa-user')
                .setPlaceholder('Enter your last and first name')
                .setDisable(true)
                .setMinValueLength(4)
                .setMaxValueLength(100),
            new Element('input')
                .setValue('')
                .setId('email')
                .setLabel('Email Address')
                .setIcon('fas fa-at')
                .setPlaceholder('Enter your email address')
                .setDisable(true)
                .setMinValueLength(4)
                .setMaxValueLength(100)
                .setType((event, element) => {
                  let email = element.getValue()?.split('@')
                  if(!email?.[1] || !email?.[1]?.split('.')?.[1] || email[1].split('.')?.[1]?.length < 2)
                    throw new Error('The email address is not valid');
                }),
            new Element('input')
                .setValue('')
                .setId('phone')
                .setLabel('Phone Number')
                .setIcon('fas fa-phone')
                .setPlaceholder('Enter your phone number')
                .setDisable(true)
                .setMinValueLength(9)
                .setMaxValueLength(11)
                .setType((event, element) => {
                  let phone = element.getValue()
                  if(isNaN(phone))
                    throw new Error('The phone number is not valid');
                }),
            new Element('textarea')
                .setValue('')
                .setId('message')
                .setLabel('Message')
                .setIcon('fas fa-envelope-square')
                .setPlaceholder('Enter your message')
                .setDisable(true)
                .setMinValueLength(20)
                .setMaxValueLength(2000)

          ],
          footer   : [
              new Element('button').setLabel('Send us a message').setDisable(true).on('click', ({element}) => {
                element.setBusy(true);
                element.setLabel('Wait, we are sending your email...')
                Fetch.post('https://hotfusion.ca/cgi-bin/mail.php',this.Layout[0].component.getFormAsObject()).then(e => {
                  if(e.status === 'error')
                    return alert('Sorry, but your message could not be sent. Check the fields and make sure fields are not empty!');
                  this.swiper.allowSlideNext = true;
                  this.swiper.slideTo(2);
                  this.Layout[0].component.elements.forEach(x => x.setValue(''));
                  element.setLabel('Send us a message');
                  element.setBusy(false);
                })
              })
          ]
        }).on('keydown',async () => {
          let isValid = this.Layout[0].component.isValid()
          this.Layout[0].component.footer[0].setDisable(!isValid);
        })
    );
    setTimeout(() => {
      this.onSlideChange({
        activeIndex:0
      });
    },100)
  },
  watch : {
    enable(value){
      this.Layout.forEach((layout, index) => {
        layout.component.elements
            .forEach(item => item.setDisable(!value));
        if(!index && value)
          layout.component.elements[index].setFocus();

      });
      setTimeout(() => {
        this.onSlideChange({
          activeIndex:0
        });
      },100)
    }
  }
}
</script>

<template>
  <swiper
      class="contactus"
      :allowSlideNext = "false"
      :allowSlidePrev = "false"
      @swiper="onSwiper"
      style="height: 100%;" :modules="modules" :slides-per-view="1" :space-between="50">
    <swiper-slide>
      <div class="paragraph" center ref="paragraph">
        <div class="icon">
          <i class="fas fa-paper-plane"></i>
        </div>
        <h1 value="Contact Us">
        </h1>
        <div class="line"></div>
        <p>
          It’s free to reach out to us, so why not? Send us your inquiry, and we'll get back to you as soon as possible.
        </p>
      </div>
      <layout :layout="Layout"></layout>
    </swiper-slide>
    <swiper-slide>
      <div class="paragraph" center ref="paragraph">
        <div class="icon">
          <i class="fas fa-envelope"></i>
        </div>
        <h1 value="You message has been received!">
        </h1>
        <div class="line"></div>
        <p>
          Thank you for reaching out! We've received your message and will respond as soon as possible. Your inquiry is important to us, and we'll get back to you promptly. If you have any urgent concerns, please feel free to contact us directly.
          <br><br>
          <button style="width: 160px" @click="close" >
            <i class="fas fa-angle-right"></i>
            Return To Home
          </button>
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style lang="less" scoped>

</style>
