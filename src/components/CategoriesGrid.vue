<template>
  <div  class="categories-playlists">
    <h5>Discover new tracks</h5>

    <div v-if="!!loading" class="loading">
      <Loading />
    </div>

    <div v-else class="container-categories">
      <template v-for="(playlist, index) in toMusicPlaylists"  v-bind:key="index">
        <div class="album-info-wrapper">
          <div class="album-info">
            <router-link :to="`/PlaylistDetails/toMusicPlaylists/${playlist.id}`">
              <img :src="playlist.src" class="cover-album">
            </router-link>
            <div class="cover-name">
              <span>{{ playlist.name }}</span>
              <div class="info-play">{{ playlist.description }}</div>
            </div>
          </div>

          <a class="waves-effect waves-light grey darken-1 btn-small"><i class="material-icons">play_arrow</i></a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import Loading from './Loading.vue'

  export default {
    name: 'PlayerSlider',
    components: {
      Loading
    },
    data () {
      return {
        toMusicPlaylists: computed(() => this.$store.state.toMusicPlaylists),
        loading: computed(() => this.$store.state.loading)
      }
    }
  }
</script>

<style src="@/styles/categories_grid.scss" lang="scss" scoped />