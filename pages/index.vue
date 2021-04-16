<template>
<div>
<nuxt-link to="/next_HP">Go to Next_HP</nuxt-link>
<v-container>
  <v-row>
   <!-- <v-spacer> -->


    <v-col>
      <!-- <p>経過秒：{{KadouJikan_Byou_Test}}   時分秒：{{KadouJikan}}</p> -->
      <p>{{KadouJikan}}</p>
      <!-- <v-btn @click="fireStoreAdd">FireStore</v-btn> -->
     <!-- <p class="cont">{{getGenzaiJikan}}秒経過</p> -->
      <!-- <nuxt-link to="/ren">to ren</nuxt-link> -->
      <!-- {{getSpark()}} -->
      <!-- {{getSpark()}} -->
      <!-- <v-btn @click="Spark" color="red lighten-4">Spark</v-btn>
      <v-btn @click="cycleCounterUD" color="yellow lighten-4">cycleCounter</v-btn>
      <v-btn @click="statusArryUD" color="blue lighten-4">statusArry</v-btn>
      <v-btn @click="cycleTimeArrayUD" color="green lighten-4">cycleTimeArrayUD</v-btn>
      <v-btn @click='test2'>For!</v-btn> -->
      <!-- <v-btn @click.native='fire'>Fire!</v-btn> 
      <v-btn @click='fire'>Fire2!</v-btn>  -->
     </v-col>
    <v-col>
        <div id="GenzaiJikan" class="my-0 indigo--text text-right text--lighten-2 font-weight-bold subtitle">{{GenzaiJikan}}</div>
    </v-col>

   <!-- </v-spacer> -->
  </v-row>
  <v-row class="my-0" style="height: 600px;">
    <v-col cols="12" sm="8" md="6" lg="3" xl="2">
      <compMachine name="MC024"/>
      <!-- <v-card width="300px" height="420px" elevation='12'>
        sdfasdfasfa
      </v-card> -->
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
    <!-- <v-col cols="12" sm="8" md="6" lg="4" xl="3" style="background-color: #E1BEE7"> -->
      <compMachine name="MC026"/>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
      <compMachine name="MC027"/>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
      <compMachine name="MC028"/>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
      <compMachine name="LN034"/>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
      <compMachine name="MC031"/>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
      <compMachine name="GT999"/>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="3" xl="2">
      <compMachine2 name="MC027"/>
      <!-- <compDateMH /> -->
    </v-col>
   
  </v-row>
</v-container>

</div>
</template>

<script src="./main.js">

</script>
<style>

 @import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono");
 
#kadouritsu{
  font-size: 1.5em;
}

#container{
    display:grid;
    grid-template-columns:300px 300px 1fr;
    grid-template-rows:300px 200px 1fr;
    grid-template-areas:
        "areaA areaA areaB"
        "areaC areaD areaB"
        "areaE areaD areaB";
    padding: 10px;
}

#test{
  grid-area:areaA;
  font-family: 'Share Tech Mono', sans-serif;
  font-size: 3em;
  background:black;
  color:aliceblue;
  text-align: center;
  display:-webkit-flex;
  align-items: center; 
  -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
  -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
 justify-content: center; /* 横方向中央揃え */
  vertical-align: "middle";
  margin: 10px 
}

.keika{
  font-size:1em;
}

#kadouJikan{
  grid-area:areaE;
  background:purple;
  color:white;
  border: solid 4px brown;
}

#clock{
  grid-area:areaA;
  background:black;
  display:flex;
  margin: 10px
}

#msg{
  grid-area:areaD;
  padding: 0px;
  margin: 5px;
  background:pink;
  color:brown;
  border: solid 3px brown;
}

#grp {
  grid-area:areaB;
  padding:0px;
  border: double 4px red;
  background-color:rgba(100,200,200,0.1);
  
}

#line{
  /* height: 100%; */
  width:500px;
  
}

#stts{
  background:skyblue;
  border: solid blue 4px;
  font-size:3em;
  margin:5px;
    text-align: center;
  display:-webkit-flex;
  display:flex;
   -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 align-items: center; /* 縦方向中央揃え */
  -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
 justify-content: center; /* 横方向中央揃え */
  vertical-align: "middle";
}

.Unten{
  color: blue;
  font-size:3em;
  /* background-color:blue; */
  /* width: 700px;
  height: 100px; */
  /* text-align: center;
  display:-webkit-flex;
  display:flex; */
   /*-webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 /*align-items: center; /* 縦方向中央揃え */
  /*-webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
 /*justify-content: center; /* 横方向中央揃え */
  /* vertical-align: "middle"; */
}

.Teishi2{
  color:green; 
  font-size:3em;
  background-color:red;
  /* width: 200px;
  height: 100px;
  border-radius: 50%;
  display:-webkit-flex;
  display:flex; */
 
}

.time{
  font-size:1em;
}


</style>