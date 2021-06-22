<template>
  <div class="header-container">
    <div class="header-left-wrapper">
      <div class="logo-section">
        <img src="../assets/music.svg" />
        <p>toMusic</p>
      </div>

      <div class="divider" />

      <div class="input-field">
        <input type="text" placeholder="Find your vibe soundtrack">
        <i class="material-icons">search</i>
      </div>
    </div>

    <div class="header-right-wrapper">
      Fry, 8 April
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style src="@/styles/header.scss" lang="scss" scoped />