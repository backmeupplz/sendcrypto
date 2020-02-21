<template lang="pug">
  div
    Address(v-if='$route.hash')
    Send(v-if='!$route.hash')
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Address from "./Address.vue";
import Send from "./Send.vue";

@Component({
  components: {
    Address,
    Send
  }
})
export default class Home extends Vue {}
</script>
