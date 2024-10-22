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
            new Element('input').setLabel('Your name').setPlaceholder('Your first and last name'),
            new Element('input').setLabel('Your email address').setPlaceholder('Enter your valid email address'),
            new Element('input').setLabel('Domain Name').setPlaceholder('If you have a domain name, provide one'),
            new Element('textarea').setLabel('Your message').setPlaceholder('Write your message'),
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
