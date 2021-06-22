<template>
  <div class="player-container">
    <div class="background-image-blur"></div>
    <div class="player-header">
      <i class="material-icons">chevron_left</i>
      <i class="material-icons">more_horiz</i>
    </div>
    <div class="black-mask">
      <div class="cover-album">
        
      </div>
      <div class="player-content">
        <div class="track">
          <span class="music-title">Changes</span>
          <span class="artist-name">Justin Bieber</span>
        </div>
        <div class="line">
          <vue-slider
            v-model="value"
            :tooltip="'none'"
            :width="300"
          ></vue-slider>
        </div>
        <div class="buttons">
          <img src="../assets/shuffle.svg" alt="" class="shuffle-button">
          <img src="../assets/play-previous.svg" alt="" class="previous-button">
          <img src="../assets/play.svg" alt="" class="play-btn">
          <img src="../assets/play-next.svg" alt="" class="next-button">
          <img src="../assets/repeat.svg" alt="" class="loop-button">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import '../assets/slider-style/material.css'

export default {
  name: 'Player',
  components: {
    VueSlider
  },
  data () {
    return {
      value: 99,
    }
  }
}
</script>

<style src="@/styles/player.scss" lang="scss" scoped />
