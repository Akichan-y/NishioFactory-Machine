<template>
<div>
  <nuxt-link to="/">戻る</nuxt-link>
  <v-container class="my-0 pa-0 grey lighten-3">
      <v-row cols="12" class="ma-2 pa-0">
        <v-col>
          <compMachine name="LN034"/>
        </v-col>
        <v-col>
          <compMachine name="MC031"/>
        </v-col>
        <!-- <v-col  cols="12" sm="6" md="4" lg="4" xl="2"> -->
        <v-col>
          <v-card elevation=12 sm="6" md="4" lg="4" xl="2">
            <p class="ml-2 indigo--text display-subtitle">稼働状況一覧</p>
            <ul id="example-1">
            <li v-for="(item,index) in this.getStatusFull" :key="item.message">
              {{index}}...
              <span v-if="item==0"  class="grey darken-2  white--text text-center text--lighten-2 font-weight-bold subtitle width--50%">
                停止中
              </span>
              <span v-else-if="item==1" class="green darken-2 white--text text-center text--lighten-2 font-weight-bold subtitle">
                運転中
              </span>
              <span v-else-if="item==2" class="red white--text text-center text--lighten-2 font-weight-bold subtitle">
                異常発生中
              </span>
              <span v-else-if="item==3" class="yellow black--text text-center text--lighten-2 font-weight-bold subtitle">
                段取中
              </span>
              <span v-else-if="item==4" class="pink lighten-4 green--text text-center text--darken-2 font-weight-bold subtitle">
                計画停止中
              </span>
              <!-- <span>{{items[LN034]}}</span> -->
              <!-- <span>{{items["LN034"]}}</span> -->
              <span>{{"......"+getStopWatchArrayPrimitive[index]}}</span>
            </li>
            </ul>
            <!-- <v-btn @click="test">配列テスト</v-btn>
            <v-btn @click="graphUD">graphテスト</v-btn>
            <v-btn @click="fire" pink>Firebaseテスト</v-btn> -->
              <!-- {{getStopWatchArrayPrimitive}} -->
          </v-card>

          <!-- <v-card class="mt-2 py-2" elevation=12>
            <v-layout  justify-center class="flex"> -->

              <!-- imgをdivで囲わないと、iphneで縦に伸びてしまう
              https://yamaki-pme.com/vertically-stretched-image -->

              <!-- <div  width="100px" height="100px">
                <img v-bind:src="image_src" width="100%" height="100%">
              </div>
            </v-layout>
          </v-card> -->
            
      </v-col>
        
      <v-col>
            <GChart
              :settings="{packages: ['timeline']}" 
              type="Timeline"   
              :data="chartData"
              :options="chartOptions"
              @ready="onChartReady"
            />
        <v-card pa-0 height="420px" elevation=12>

          <ObiChart :data="Line_chartData" :options="Line_options" :height="420"/>
        </v-card>
        <!-- <BarChart :data="chartData" :options="options" :height="280"/> -->
      </v-col>

    </v-row>
  </v-container>

  
</div>
</template>

<style scoped>
#aaa{
  color: aqua;
  background-color:red;
}

.flex{
  display: flex;
  align-items: flex-start;
}


</style>


<script src="./next_HP_main.js">

</script>
