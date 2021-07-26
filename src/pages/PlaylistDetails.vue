<template>
  <div class="playlist-details">
    <section class="playlist-details-header">
      <div class="playlist-cover"></div>

      <div class="playlist-details-info">
        <p>PLAYLIST</p>
        <h3>Rock n' Roll</h3>
        <span>Mariana Cavalcanti - 4likes - 1666 songs,  10hr 55min</span>
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

<style src="@/styles/playlist_details.scss" lang="scss" scoped />