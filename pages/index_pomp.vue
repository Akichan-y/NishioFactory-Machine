<template>
<div>
  <nuxt-link to="/ren">to ren</nuxt-link>
  <nuxt-link to="/index_M5StickC">to M5StickC</nuxt-link>


  <div id="container">
    <!-- <hello /> -->
            <div id="test" :style="styleObject">
            <!-- <v-btn @click="fillData" > fire</v-btn> -->
            <!-- <v-btn @click="fire">fire</v-btn> -->
              <p v-if="lastS =='2'" class='Unten'> {{dataCount + 1}}ｹ目</p><br>
              <p v-if="lastS =='1'" class='Teishi2' > 停止中</p><br>
              <!-- 経過時間 -->

              <p> {{ time }}</p> 
            </div>
            
              <div id="kadouJikan">
              <KadouJikan />
              {{getKeikaJikan}}
              {{getKadouJikanVuex}}
              <p id='kadouritsu'>{{Kadouritst}}</p>
              <!-- {{getNow}} -->
            </div>

            <!-- <div id="clock">
                {{ time }}
            </div> -->

            <div id="stts">
              <!-- {{this.$store.state.timeBank.testData}}  -->
              <!-- {{this.getD}}  -->
              <span class="brown--text .font-weight-bold text--lighten-1">完了数</span><br>
              {{dataCount}}ケ
            </div>
            <div id="msg">
              <!-- {{'最終ステータスは、' + lastS + '最新タイムスタンプは' + lastD + 'です'}} -->
              <!-- <doughnuts /> -->
              <!-- <br> -->
            <p>プレッシャープレート加工機<br>サイクル・ビュー</p><br>
            <!-- <p>2020/11/27 orderByChildとstatAt,endAtでデータ絞り込み</p><br> -->
            停止時間（着脱時間）直近７件の履歴
            <ul>
              <!-- <li v-for="data in data_Teishi_Title" :key="data.id">{{data}}</li> -->
              <li v-for="data in reverseItems" :key="data.id">{{data}}</li>
            </ul>
            <!-- {{data_Teishi}} -->
            <!-- {{data_Teishi_Title}} -->
            </div>
          <div id="grp">
            <line-chart :chart-data="datacollection" :options="dataOption"  id="line"></line-chart>

          </div>

  </div>

</div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'



import StopWatch from '~/components/StopWatch.vue';
import KadouJikan from '~/components/kadouJikan.vue';
import doughnuts from '~/components/doughnuts.vue';
import firebase from 'firebase';


// Vuexの使用を宣言
Vue.use(Vuex);

export default {
  components:{
    StopWatch, 
    KadouJikan,
    doughnuts
  },
  data(){
    return{
      datacollection:null,
      dataOption:null,
      time: '00:00:00.000',
      counter: 0,
      stoppedDuration : 0,
      data_Kadou:[],
      data_Teishi:[],
      data_Teishi_Title:[],
      data_kadou_total:0,
      labelSample:['a','b','c'],
      TimeIncrease:[0,0],
      lastS:'',
      lastD:'',
      timeBegan : null,
      started : null,
      running : false,
      dataCount:0,
      styleObject: {
          color: 'yellow',
          backgroundColor: 'blue',
          fontSize: 30,

      },
      MachineCT:{MC027:0,NC036:0},
      MachineStatus:{MC027:true,NC036:false},
      MachineLT:{MC027:'MC027LT',NC036:'NC036LT'}
    }
  },
  mounted(){
    this.fillData()
  },
  computed: {
    reverseItems() {
        // return this.items.slice().reverse();
        return this.data_Teishi_Title.slice().reverse().splice(0,7); 逆順にして最後の7つを表示させる
    },
    RDS(){
      return this.data_sample;
    },
    GetD(){
      return this.$store.getters['counter/counter']
      // return this.$store.getters['timeBank/getD']
      // return this.$store.getters['timeBank/getTest']
    },
    getNow:function(){
      // let nowVthis = nowV.getUTCHours()+':'+nowV.getUTCMinutes()+':' + nowV.getUTCSeconds()
      // return 

      let Tgt = new Date();
      Tgt = this.$store.getters['getNow'];
      // let Tgt1 = Tgt.getUTCHours()+':'+Tgt.getUTCMinutes()+':' + Tgt.getUTCSeconds();
    
      return Tgt
    },
    getKadouJikanVuex(){
      return this.$store.getters['getKadouJikan']
    },
    getKeikaJikan(){
      return this.$store.getters['timeBank/getKeikaJikanByou']
    },
    Kadouritst(){
      return `【マシン稼働率${Math.round(this.$store.getters['getKadouJikan'] / this.$store.getters['timeBank/getKeikaJikanByou'] * 1000)/10}％】`
    }
  },
  methods:{
    fillData(){
        this.fire();

        this.dataOption={
          responsive: true, //サイズ自動調整
          scales: {                          //軸設定
              yAxes: [{                      //y軸設定
                  display: true,             //表示設定
                  scaleLabel: {              //軸ラベル設定
                      display: true,          //表示設定
                      labelString: '稼働ステップ時間',  //ラベル
                      fontSize: 8               //フォントサイズ
                  },
                  ticks: {                      //最大値最小値設定
                      min: 0,                   //最小値
                      max: 30,                  //最大値
                      fontSize: 8,             //フォントサイズ
                      stepSize: 5               //軸間隔
                  },
              }],
              xAxes: [{                         //x軸設定
                      display: true,
                      stacked:true,                //表示設定
                      barPercentage: 0.4,           //棒グラフ幅
                      categoryPercentage: 0.4,      //棒グラフ幅
                      scaleLabel: {                 //軸ラベル設定
                                display: true,             //表示設定
                        labelString: '秒',  //ラベル
                        fontSize: 10               //フォントサイズ
                      },
                      ticks: {
                          min: 0,                   //最小値
                          max: 500,                  //最大値
                          fontSize: 8             //フォントサイズ
                      },
                  }],
          
          },
          layout: {                             //レイアウト
              padding: {                          //余白設定
                  left: 100,
                  right: 100,
                  top: 0,
                  bottom: 0
              }
          }
        
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    fire:function(){
      console.clear;
      //====================================================================
      //昨日（2020/11/26）のIoT研究会にて小田中くんからリソース節約のアドバイス!!
      //データ参照範囲をクエリーっぽく指定しないと、アクセス量が増大！
      //データ件数や参照する端末（ユーザー）が増えてくると、要注意！！

      //new Date()が冗長で、変数名が乱暴な記述ではあるが、、、下記の通り、
      //スタート時間でソートを掛けた上で、本日の0時0分0秒から、23時59分59秒を対象とする。
      let d2 = new Date();
      let y2 = d2.getFullYear();
      let m2 = d2.getMonth();
      let d3 = d2.getDate();
      // let startD = new Date(2019,10,27,0,0,0);
      // let endD = new Date(2021,10,27,23,59,59);
      let startD = new Date(y2,m2,d3,0,0,0);
      let endD = new Date(y2,m2,d3,23,59,59);
      // let startTimestamp = new Timestamp(startD.getTime());
      let startTimestamp = String(Date.parse(startD));
      let endTimestamp = String(Date.parse(endD));

      console.log(startTimestamp);
      // console.log(endTimestamp);
      const database = firebase.database();
      // const esp = database.ref('SP_Flow/'); 
      // const esp = database.ref('SP_Flow/')
      const esp = database.ref('NishioMachineCT/') //2021/1/10以前は、MC/だった
                  .orderByChild('startTime').startAt(startTimestamp).endAt(endTimestamp); 
      //====================================================================
      // console.log('esp!')
      esp.on('value',(snapshot)=>{
        
        this.data_kadou=[];
        this.data_Teishi=[];
        this.data_kadou_total=123;
        this.$store.commit('kadouJikanReset')
        this.data_Teishi_Title = [];
        this.labelSample=[];
        this.lastD=0;
        this.count = 0;
        this.dataCount = 0;
          // console.log("オケー")
          let data = snapshot.val();  
            for(let i in data){
            
            let person = data[i];
            let nowDate=new Date();
            let nowYYYY=String(nowDate.getFullYear());
            let nowMM=String(nowDate.getMonth()+1);
            let nowDD=String(nowDate.getDate());
            let nowYYYYMMDD= nowYYYY+nowMM+nowDD;
            let nowH=String(nowDate.getHours());
            let nowM=String(nowDate.getMinutes());
            let nowS=String(nowDate.getSeconds());            
            let now_HMS = 
                          `${this.zeroPadding(nowH,2)}時${this.zeroPadding(nowM,2)}分${this.zeroPadding(nowS,2)}秒 `;
            // console.log(now_HMS);
            // let TgtDEnd=new Date(Number(person.timestamp));
            let TgtDEnd=new Date(Number(person.endTime));
            let TgtYYYY=String(TgtDEnd.getFullYear());
            let TgtMM=String(TgtDEnd.getMonth()+1);
            let TgtDD=String(TgtDEnd.getDate());
            let TgtH=String(TgtDEnd.getHours());
            let TgtM=String(TgtDEnd.getMinutes());
            let TgtS=String(TgtDEnd.getSeconds());
            let TgtYYYYMMDD_Org = TgtYYYY + TgtMM + TgtDD ;
            let TgtYYYYMMDD_Org_HMS = 
                                      `${TgtMM} 月 
                                      ${this.zeroPadding(TgtDD,2)}日 
                                      ${this.zeroPadding(TgtH,2)}時 
                                      ${this.zeroPadding(TgtM,2)}分 
                                      ${this.zeroPadding(TgtS,2)}秒 `;
            let Org_HMS = 
                          `${this.zeroPadding(TgtH,2)}時${this.zeroPadding(TgtM,2)}分${this.zeroPadding(TgtS,2)}秒 `;
            // if(nowYYYYMMDD == TgtYYYYMMDD_Org){
            //↓↓↓↓  とりあえず、複数台に対応するまでは、下記コードで機械をLN034に限定する 2021/1/10Sunday  ↓↓↓↓↓↓
            const NowMachine = person.machine;
            console.log(NowMachine);
            if(nowYYYYMMDD == TgtYYYYMMDD_Org && NowMachine == 'LN034'){
            // if(nowYYYYMMDD == TgtYYYYMMDD_Org && NowMachine == 'MC027'){
              let TgtDStart=new Date(Number(person.startTime));
              let TgtYYYYstart=String(TgtDStart.getFullYear())
              let TgtMMstart=String(TgtDStart.getMonth()+1);
              let TgtDDStart=String(TgtDStart.getDate());
              let TgtHStart=String(TgtDStart.getHours());
              let TgtMStart=String(TgtDStart.getMinutes());
              let TgtSStart=String(TgtDStart.getSeconds());
  
              let TimeDeff = (Number(person.endTime) - Number(person.startTime))/1000

              let timeElapsed = new Date(TgtDEnd-TgtDStart);
              let hour = this.zeroPadding(timeElapsed.getUTCHours(),2);
              let min = this.zeroPadding(timeElapsed.getUTCMinutes(),2);
              let sec = timeElapsed.getUTCSeconds();
              let ms = this.zeroPadding(timeElapsed.getUTCMilliseconds(),3);

              if(person.startTime != '999' && TimeDeff > 5){ //チャタリングのようなデータを排除する
                
              this.TimeIncrease[Number(person.Status)-1] += TimeDeff
              console.log('コミット！')
              this.$store.commit('kadouJikanIncease',TimeDeff)

                switch(person.status){
                  case '1':
                    this.dataCount++;
                    this.count += 1;
                    this.labelSample.push(Org_HMS)
                    this.data_kadou.push(TimeDeff);
                    this.data_kadou_total =+ TimeDeff;
                    // console.log(TimeDeff);
                    console.log('コミット！')
                    this.$store.commit('kadouJikanIncease',TimeDeff)
                    // Vue.set( this.chartdata);   これがあると、１ループだけで終了してしまう。
                    break;
                  case '2':
                    this.data_Teishi.push(TimeDeff);
                    // console.log(this.data_Teishi);
                    this.data_Teishi_Title[(Org_HMS)] = TimeDeff;
                    // console.log(this.data_Teishi_Title);
                    let TimeDeff_mm = this.zeroPadding(Math.floor(TimeDeff/60),2);
                    let TimeDeff_ss = this.zeroPadding(TimeDeff % 60,2)
                    let TimeDeff_mmss = `${TimeDeff_mm}分${TimeDeff_ss}秒`
                  //連想配列に、変数からオブジェクト形式で追加
                    let key = Org_HMS;
                    let dict = {[key]:TimeDeff_mmss};
                    this.data_Teishi_Title.push(dict);


                  // key = 'kagi';
                  // dict = {[key]: 'value'};
                  // console.log(dict);
                  // >> {kagi: "value"}
                    break;
                }
              }
  
              let TgtYYYYMMDD= TgtYYYY+TgtMM+TgtDD+'  '+ TgtH+'時'+TgtM+'分'+TgtS+'秒';       
              // let nowStatus =  person.SP_Line_Status
              let nowStatus =  person.status
              
              this.lastS = nowStatus;
              this.lastD = TgtYYYYMMDD;
          this.datacollection ={
            labels:this.labelSample,
          datasets:[
            {
              label: '運転時間',
                backgroundColor: 'rgba(100, 130, 255, 0.5)',
                data: this.data_kadou
                
            },{
              label: '停止（段取・着脱）時間',
                backgroundColor: 'rgba(150, 30, 255, 0.5)',
                data: this.data_Teishi
                
              }
          ],

           

              };
            }else{
              this.lastD = '【本日はデータがありません】';
            }
          } //forループの終わり
          this.timeBegan = new Date();
          this.started = setInterval(this.clockRunning, 10);
        })//esp.onの終わり


      },//fire の終わり

    clockRunning:function(){
      let currentTime = new Date(),
      timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration),
      hour = this.zeroPadding(timeElapsed.getUTCHours(),2),
      min = this.zeroPadding(timeElapsed.getUTCMinutes(),2),
      sec = timeElapsed.getUTCSeconds(),
      ms = this.zeroPadding(timeElapsed.getUTCMilliseconds(),3);

      this.time = hour + ':' + min + ':' + this.zeroPadding(sec,2) + '.' + ms


    },
    zeroPrefix:function(){
      var zero = '';
      for(var i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
    zeroPadding:function(num,length){
      return ('00000000' + String(num)).slice(-length);
    }
  }
}
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
  color:pink;
  /* font-size:1em; */
  /* background-color:blue; */
  width: 700px;
  height: 100px;
  /* text-align: center;
  display:-webkit-flex;
  display:flex; */
   /*-webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
 /*align-items: center; /* 縦方向中央揃え */
  /*-webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
 /*justify-content: center; /* 横方向中央揃え */
  vertical-align: "middle";
}

.Teishi2{
  color:whitesmoke; 
  font-size:1em;
  background-color:red;
  width: 200px;
  height: 100px;
  border-radius: 50%;
  display:-webkit-flex;
  display:flex;
 
}


</style>