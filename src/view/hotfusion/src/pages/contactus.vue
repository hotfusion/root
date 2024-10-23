<script  lang="ts">
import {Layout,Component,Components, Element} from "@hotfusion/ui"
import * as KUTE from "kute.js";
export default {
  props:['enable'],
  data : () => ({
    Layout : new Layout('main'),
  }),
  methods: {
    onSlideChange(e){
      setTimeout(() => {
        let element = this.$refs.paragraph.querySelector('h1');
        element.innerHTML = '';
        KUTE.default.to(element, {text: element.getAttribute('value')}).start();
      })
    }
  },
  mounted() {
    this.Layout.push(
        new Component( Components.form,{
          elements : [
            new Element('input').setId('name').setLabel('Full Name').setIcon('fas fa-user').setPlaceholder('Enter your last and first name').setDisable(true).setType((value) => {
              throw new Error('error')
            }),
            new Element('input').setId('email').setLabel('Email Address').setIcon('fas fa-at').setPlaceholder('Enter your email address').setDisable(true),
            new Element('input').setId('phone').setLabel('Phone Number').setIcon('fas fa-phone').setPlaceholder('Enter your phone number').setDisable(true),
            new Element('textarea').setId('message').setLabel('Message').setIcon('fas fa-envelope-square').setPlaceholder('Enter your message').setDisable(true)
          ],
          footer : [
              new Element('button').setLabel('Send us a message')
          ]
        })
    );
    setTimeout(() => {
      this.onSlideChange();
    },100)
  },
  watch : {
    enable(value){
      this.Layout.forEach((layout, index) => {
        layout.component.elements
            .forEach(item => item.setDisable(!value));
        if(!index && value)
          layout.component.elements[index].setFocus()

      });
      setTimeout(() => {
        this.onSlideChange();
      },100)
    }
  }
}
</script>

<template>
    <div class="paragraph" center ref="paragraph">
      <div class="icon">
        <div class="cube"></div>
        <div class="circle"></div>
        <div class="triangle"></div>
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

</template>
