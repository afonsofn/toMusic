<template>
  <div v-if="!!loading">
    loading...
  </div>
  <div v-else  class="carousel">
    <template v-for="(playlist, index) in userPlaylists"  v-bind:key="index">
      <a class="carousel-item" :href="`/PlaylistDetails/userPlaylists/${playlist.id}`">
        <div class="album-wrapper">
          <img :src="playlist.src" class="cover">
          <div class="playlist-info">
            <p class="playlist-name">{{ playlist.name }}</p> 
            <p class="playlist-description">{{ playlist.author }}</p>
          </div>
        </div>
      </a>
    </template>
  </div>
</template>

<script>
  import { computed } from 'vue'

  export default {
    name: 'PlayerSlider',
    data () {
      return {
        userPlaylists: computed(() => this.$store.state.userPlaylists),
        loading: computed(() => this.$store.state.loading)
      }
    },
    mounted() {
      setTimeout(() => {
        M.Carousel.init(document.querySelectorAll('.carousel'), {dist: 0, numVisible: 8})
      }, 300);
    }
  }
</script>

<style src="@/styles/slider.scss" lang="scss" scoped />