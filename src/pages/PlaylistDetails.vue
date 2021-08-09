<template>
  <div v-if="!!loading">
    loading...
  </div>
  <div v-else class="playlist-details">
    <section class="playlist-details-header">
      <div class="playlist-info">
        <img :src="playlistDetails.src" class="playlist-cover">

        <div class="playlist-details-info">
          <p>PLAYLIST</p>
          <h3>{{ playlistDetails.name }}</h3>
          <span>{{ playlistDetails.author }} - {{ playlistDetails.tracks.length }} tracks,  10hr 55min</span>
        </div>
      </div>
      <div class="playlist-about">
        <h5>About</h5>
        <i>{{ playlistDetails.description }}</i>
      </div>
      
    </section>

    <section class="playlist-details-body">
      <div class="nav-playlist">
        <div class="left-nav">
          <img src="../assets/play.svg" alt="" class="play-btn">
          <i class="material-icons">favorite_border</i>
        </div>

        <router-link to="/" >
          <i class="material-icons back-home">chevron_left</i>
        </router-link>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>ALBUM</th>
            <th>DATE ADDED</th>
            <th class="last">DURATION</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Alvin Alan Jonathan</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td class="last">$0.87</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Alvin Alan Jonathan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td class="last">$3.76</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Alvin Alan Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td class="last">$7.00</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Alvin Alan Jonathan</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td class="last">$0.87</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Alvin Alan Jonathan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td class="last">$3.76</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Alvin Alan Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td class="last">$7.00</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Alvin Alan Jonathan</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td class="last">$0.87</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Alvin Alan Jonathan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td class="last">$3.76</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Alvin Alan Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td class="last">$7.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
  import { computed } from 'vue'

  export default {
    name: 'PlayerSlider',
    data () {
      return {
        playlistDetails: computed(() => this.$store.state.playListOnDetail),
        loading: computed(() => this.$store.state.loadingDetails)
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