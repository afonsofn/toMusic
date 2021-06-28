<template>
  <div class="home-container">
    <PlaylistSlider />
  
    <CategoriesGrid />
  </div>
</template>

<script>
import PlaylistSlider from '../components/PlaylistSlider.vue'
import CategoriesGrid from '../components/CategoriesGrid.vue'

export default {
  name: 'Home',
  components: {
    PlaylistSlider,
    CategoriesGrid
  },
  mounted() { // refatorar para setup()
    M.Carousel.init(document.querySelectorAll('.carousel'), {dist: 0, numVisible: 8})
  }
}
</script>

<style src="@/styles/home.scss" lang="scss" scoped />