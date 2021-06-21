<template>
  <div id="app-main">
    <div class="app-container">
      <Header />
      <router-view/>
    </div>
    <Player />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Player from '@/components/Player.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Player
    }
  }
</script>

<style src="./styles/global-styles.scss" lang="scss" />
