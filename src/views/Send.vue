<template lang="pug">
  .v-container.pa-4
    // Main content
    v-layout(column
    justify-center
    align-center).text-center
      v-flex(xs12 md10)
        .title.pb-4 {{$t("steps.1")}}
        .headline.pb-4 {{$t("steps.2", { address: this.address})}}
        .headline.pb-4(v-html='$t("steps.3", { privateKey: this.privateKey })')
        .caption {{$t('caution')}}
        .caption(v-html='$t("sources")')
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import * as store from "../plugins/store";
import Component from "vue-class-component";
import { i18n } from "../plugins/i18n";
import Web3 from "web3";
const web3 = new Web3(
  "https://mainnet.infura.io/v3/dd80994b42d540daa7c17d01bfbacd6d"
);

@Component
export default class Send extends Vue {
  privateKey = "~";
  address = "~";
  async mounted() {
    const wallet = web3.eth.accounts.create();
    this.privateKey = wallet.privateKey;
    this.address = wallet.address;
  }
}
</script>

<style scoped>
.headline {
  word-wrap: break-word;
}
</style>
