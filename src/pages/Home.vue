<template>
  <div class="home-container">
    <div class="main-content">
      <!-- 4 playlists se tiverem, (ao lado da ultima playlist se tiver mais plylists ? ver todas : um button para criar uma nova )
      se nao tiver playlist sugestoes de 4 artistas e um botao para criar playlists -->
      <div class="playlist-container">
        <p class="cover"></p>
        <div class="playlist-info">
          <p class="playlist-name">PlayList 1</p> 
          <p class="playlist-description">description...</p>
        </div>
      </div>
     
      <div class="playlist-container">
        <p class="cover"></p>
        <div class="playlist-info">
          <p class="playlist-name">PlayList 2</p> 
          <p class="playlist-description">description...</p>
        </div>
      </div>

      <div class="playlist-container">
        <p class="cover"></p>
        <div class="playlist-info">
          <p class="playlist-name">PlayList 3</p> 
          <p class="playlist-description">description...</p>
        </div>
      </div>

      <div class="playlist-container">
        <p class="cover"></p>
        <div class="playlist-info">
          <p class="playlist-name">PlayList 4</p> 
          <p class="playlist-description">description...</p>
        </div>
      </div>

      <div class="playlist-container">
        <p class="cover"></p>
        <div class="playlist-info">
          <p class="playlist-name">PlayList 5</p> 
          <p class="playlist-description">description...</p>
        </div>
      </div>
    </div>
    <div class="categorys">
      playlists separadas por categoria
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style src="@/styles/home.scss" lang="scss" scoped />