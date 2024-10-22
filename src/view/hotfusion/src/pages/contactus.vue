<script  lang="ts">
import {Layout,Component,Components, Element} from "@hotfusion/ui"
export default {
  data : () => ({
    Layout : new Layout('main'),
  }),
  methods: {},
  mounted() {
    this.Layout.push(
        new Component( Components.form,{
          elements : [
            new Element('input').setId('name').setLabel('Full Name').setIcon('fas fa-user').setPlaceholder('Enter your last and first name'),
            new Element('input').setId('email').setLabel('Email Address').setIcon('fas fa-at').setPlaceholder('Enter your email address'),
            new Element('input').setId('phone').setLabel('Phone Number').setIcon('fas fa-phone').setPlaceholder('Enter your phone number'),
            new Element('textarea').setId('message').setLabel('Message').setIcon('fas fa-envelope-square').setPlaceholder('Enter your message')
          ],
          footer : [
              new Element('button').setLabel('Send us a message')
          ]
        })
    )
  },
}
</script>

<template>
<layout :layout="Layout"></layout>
</template>
