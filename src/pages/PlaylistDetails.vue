<template>
  <div v-if="!!loading" class="loading">
    <Loading />
  </div>
  <div v-else class="playlist-details">
    <section class="playlist-details-header">
      <div class="playlist-info">
        <img :src="playlistDetails.src" class="playlist-cover">

        <div class="playlist-details-info">
          <p>PLAYLIST</p>
          <h3>{{ playlistDetails.name }}</h3>
          <span>{{ playlistDetails.author }} - {{ playlistDetails.tracks.length }} tracks, {{calculateDuration(playlistDetails.tracks)}}</span>
        </div>
      </div>
      <div class="playlist-about">
        <h5>About</h5>
        <i>"{{ playlistDetails.description }}"</i>
      </div>
      
    </section>

    <section class="playlist-details-body">
      <div class="nav-playlist">
        <div class="left-nav">
          <img src="../assets/play.svg" alt="" class="play-btn">
          <i v-if="favorite === true" class="material-icons empty" @click="makeFavorite()">favorite_border</i>
          <i v-else class="material-icons fullfil" @click="makeFavorite()">favorite</i>
        </div>

        <router-link to="/" >
          <i class="material-icons back-home">chevron_left</i>
        </router-link>
      </div>
      
      <table>
        <thead>
          <th>#</th>
          <th>TITLE</th>
          <th>ARTIST</th>
          <th>DATE ADDED</th>
          <th class="last">DURATION</th>
        </thead>

        <tbody>
          <template v-for="(track, index) in playlistDetails.tracks" v-bind:key="index">
            <tr>
              <td class="first">
                <span>{{ index + 1 }}</span>
                <img src="../assets/play.svg" alt="" class="play-btn">
              </td>
              <td>{{ track.title }}</td>
              <td>{{ track.artist }}</td>
              <td>{{ converteData(track.date) }}</td>
              <td class="last">{{ convertDuration(track.duration) }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
  import { computed, onBeforeMount } from 'vue'
  import Loading from '../components/Loading.vue'
  import format from 'date-fns/format'
  import parseISO from 'date-fns/parseISO'
  import { convertDurationToTimeString, calculateTotalDuration } from '../utils/utils'

  export default {
    name: 'PlayerSlider',
    components: {
      Loading
    },
    data () {
      return {
        playlistDetails: computed(() => this.$store.state.playListOnDetail),
        loading: computed(() => this.$store.state.loadingDetails),
        favorite: true,
        convertDuration: convertDurationToTimeString,
        calculateDuration: calculateTotalDuration
      }
    },
    methods: {
      makeFavorite() {
        this.favorite = !this.favorite
      },
      converteData(date) {
        return format(parseISO(date), 'MMMM d, Y');
      }
    },
    created() {
      this.$store.commit("setLoadingDetails", true)
    },
    mounted() {
      this.$store.dispatch("getPlaylists", {type: this.$route.params.type, id: this.$route.params.id})
    }
  }
</script>

<style src="@/styles/playlist_details.scss" lang="scss" scoped />