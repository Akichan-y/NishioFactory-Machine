
<template>
  <div>
    <p>ルーティングの学習中【必須技術＠＠】</p>
    <nuxt-link :to="toLink" > Go to Next</nuxt-link>


    <v-btn @click="AtaiHenko">値を変更する</v-btn>
  </div>

</template>

<script>
// ルーティングにて、値を渡す実験ページ
export default {
  data() {
    return {
      toLink:"/next?pageName=nextという文字を渡す"
    }
  },
  methods: {
    AtaiHenko:function() {
      let Atai="aaaa";
      this.toLink="/next?pageName="+Atai
    }
  }
}
</script>