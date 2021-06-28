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
  },
  mounted() { // refatorar para setup()
    M.Carousel.init(document.querySelectorAll('.carousel'), {dist: 0, numVisible: 8})
  }
}
</script>

<style src="@/styles/home.scss" lang="scss" scoped />