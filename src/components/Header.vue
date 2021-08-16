<template>
  <div class="header-container">
    <div class="header-left-wrapper">
      <div class="logo-section">
        <img src="../assets/music.svg" />
        <p>toMusic</p>
      </div>

      <div class="divider" />

      <h6>Find your vibe soundtrack</h6>
    </div>

    <div class="header-right-wrapper">
      {{ date }}
    </div>

  </div>
</template>

<script>
  import format from 'date-fns/format'

  export default {
    name: 'Header',
    data() {
      return {
        date: format(new Date(), 'EEEEEE, d MMMM')
      }
    }
  }
</script>

<style src="@/styles/header.scss" lang="scss" scoped />