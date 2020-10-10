<template>
  <v-container>
    <h2>あなたにおすすめのプランは...</h2>
    <router-link :to="{ name: 'Hello' }">もう一度診断する</router-link>
  </v-container>
</template>

<script>
  export default {
    created () {
    }
  }
</script>