<template>
  <div>
    <v-card class="px-4 pt-5" elevation="5" height="280px" >
      <h4>稼働時間コンポーネント</h4>
      <!-- <h4>現在時間：{{GenzaiJikan}}</h4> -->
      <p id='kadoujikan'>{{KadouJikan}}</p>
      <p>asdfasfa</p>
      <p class='backgroundColor=red'>{{getSensingTimeStart}}</p>
    </v-card>
  </div>
</template>
<style>
h4{
  font-size:1em;
  color: blue;
  text-align: center;
}
#kadoujikan{
  /* width:80%;  */
  /* font-family: 'Cabin Sketch'; */
  font-size: 5em;
  color: blue;
  text-align: center;
  border:solid 1px;
  border-radius: 10px;
  padding: 0px;
  margin: 0px;
}
</style>
<script>
//現在時間の、稼働時間（分秒）をリターンするコンポーネント
//結果は、timeBank.js に格納する

export default {
  data:function(){
    return{

    }
  },
  computed: {
    //CDSセンサー反応スタート時間（StopWatchの起点となる）
    getSensingTimeStart(){
      return this.$store.getters['timeBank/getSensingTime']("MC027") 
      
      getStopWatchArrayPrimitive
    }
  },
  mounted:function(){

    this.keikaJikan();
    
  },
  methods:{

    
  }
}
</script>