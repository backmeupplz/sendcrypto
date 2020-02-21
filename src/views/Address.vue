<template lang="pug">
  .v-container.pa-4
    // Main content
    v-layout(column
    justify-center
    align-center).text-center
      v-flex(xs12 md10)
        .title.pb-4 {{$t("address.1")}}
        .headline.pb-4 {{$t("address.2", { balance: this.balance})}}
        .headline.pb-4(v-html='$t("address.3")')
        .headline.pb-4 {{this.privateKey}}
        .headline.pb-4 {{this.address}}
        .caption(v-html='$t("sources")')
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import * as store from '../plugins/store'
import Component from 'vue-class-component'
import { i18n } from '../plugins/i18n'
import Web3 from 'web3'
const web3 = new Web3(
  'https://mainnet.infura.io/v3/dd80994b42d540daa7c17d01bfbacd6d'
)

@Component
export default class Home extends Vue {
  balance = '~'
  privateKey = '~'
  address = '~'
  async mounted() {
    const account = await web3.eth.accounts.privateKeyToAccount(
      window.location.pathname.substr(1)
    )
    this.privateKey = account.privateKey
    this.address = account.address
    this.balance = web3.utils.fromWei(
      await web3.eth.getBalance(account.address),
      'ether'
    )
  }
}
</script>

<style scoped>
.headline {
  word-wrap: break-word;
}
</style>
