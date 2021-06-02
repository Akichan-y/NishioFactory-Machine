<template>
  <section class="container">
    <div>
      <!-- <h1 class="title" display-4>
          テスト
      </h1> -->
      <h1 display-4>
        2021年5月14日（金）とよたイノベーションセンターでのセミナー登壇の様子です。<br>
      山崎が、IoTやDXにまつわること、西尾工場での取り組みなどを話しています。

      </h1>
      <youtube
        ref="youtube" 
        :video-id="videoId"
        :player-vars="{autoplay:1}"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  components: { 
  },
   data () {
    return {
      videoId: 'dUWwr89kEbY',
      // videoId: 'oy-HyrxsPJE',
    }
  },

  methods: {
    playVideo() {
      this.player.playVideo()
    },
    //再生スタートした際に発火
    playing() {
      console.log('\o/ we are watching!!!')
    },
    //一時停止した際に発火
    paused() {
      console.log('paused')
    },
    //再生終了した際に発火
    ended() {
      console.log('ended')
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 200px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>