<script  lang="ts">
import {Fetch,Layout,Component,Components, Element, Warning} from "@hotfusion/ui"
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
            new Element('input')
                .setId('name')
                .setValue('vadim')
                .setLabel('Full Name')
                .setIcon('fas fa-user')
                .setPlaceholder('Enter your last and first name')
                .setDisable(true)
                .setMinValueLength(4)
                .setMaxValueLength(100),
            new Element('input')
                .setValue('Korolov.vadim@gmail.com')
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
                .setValue('5149996659')
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
                .setValue('Hello, my name is vadim and i am looking for someone to work with!')
                .setId('message')
                .setLabel('Message')
                .setIcon('fas fa-envelope-square')
                .setPlaceholder('Enter your message')
                .setDisable(true)
                .setMinValueLength(20)
                .setMaxValueLength(2000)

          ],
          footer : [
              new Element('button').setLabel('Send us a message').setDisable(true).on('click', ({element}) => {
                element.setBusy(true);
                Fetch.post('https://hotfusion.ca/cgi-bin/mail.php',this.Layout[0].component.getFormAsObject()).then(e => {
                  console.log('retrun',e);
                })
              })
          ]
        }).on('keydown',async () => {
          let isValid = this.Layout[0].component.isValid()
            this.Layout[0].component.footer[0].setDisable(!isValid);
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
