<template>
  <div class="home-container">
    <Slider />

    <div class="categorys">
      playlists separadas por categoria
    </div>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'

export default {
  name: 'Home',
  components: {
    Slider
  }
}
</script>

<style src="@/styles/home.scss" lang="scss" scoped />