//稼働時間コンポーネントは使わずに、本main.js⇒veuxに一本化する。

import Vue from 'vue'
import Vuex from 'vuex'
// import Vue from "vue/dist/vue/vue.esm.js";


import StopWatch from '~/components/StopWatch.vue';
import KadouJikan from '~/components/kadouJikan.vue';
// import doughnuts from '~/components/doughnuts.vue';
import firebase from 'firebase';

import compMachine from '~/components/compMachine.vue';

import Mixin from '~/mixin/mixin.js';
// import Mixin from '@/mixin/mixin.js';
// Vuexの使用を宣言
Vue.use(Vuex);

//LN034(HPライン)に加え、雅チームの、MC-026 MC-027 MC-024 MC-028 の４台を新たなターゲットとする。

export default {
  mixins:[Mixin],
  components:{
    StopWatch, 
    KadouJikan,
    // doughnuts,
    compMachine
  },
  data(){
    return{
      excludeSetTime : [],
      timerId:0,
      KadouJikan:'稼働時間',
      KadouJikan_Byou_Test:0,
      GenzaiJikan:'現在時間',
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      classes: [
        ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1],
        ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
        ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
        ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
        ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
        ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
        ['subtitle-1', 'Subtitle 1', '1rem', '400', '.009375em', 4],
        ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
        ['body-1', 'Body 1', '1rem', '400', '.03125em', 4],
        ['body-2', 'Body 2', '0.875rem', '400', '.0178571429em', 4],
        ['button', 'Button', '0.875rem', '500', '.0892857143em', 4],
        ['caption', 'Caption', '0.75rem', '400', '.0333333333em', 4],
        ['overline', 'Overline', '0.75rem', '500', '.1666666667em', 4],
      ],
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
      sparkTest:{LN034:[0,1,2,3,4,5],MC027:[6,7,8,9,]},
      sparkTest2:([0,1,2,3,4,5],[6,7,8,9,]),
      sparkTest3:[0,1,2,3,4,5],
      sparkTest5:{LN034:100,MC027:[6,7,8,9,]}
    }
  },
  mounted(){
    this.fillData();
  },
  computed: {
    // getKeikaJikanByou:function(){
    getProgressSeconds:function(){
      // return this.$store.getters['timeBank/getKeikaJikan'];
      return this.$store.getters["timeBank/getProgressSeconds"]
      // return "1023"
    },
    // getSpark(){
      //   return this.$store.getters['timeBank/getSpark']
      // },
    getGenzaiJikan(){
      //現在までの経過時間（投入工数）
      return this.$store.getters["timeBank/getKeikaJikanByou"]
    },

    getCA(){
      return this.$store.getters['timeBank/getCycleArray2']
    },
    getCA2(){
      return this.$store.getters['timeBank/getCycleArray']
    },
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
      return this.$store.getters['timeBank/getKeikaJikan']
    },
    Kadouritst(){
      return `【マシン稼働率${Math.round(this.$store.getters['getKadouJikan'] / this.$store.getters['timeBank/getKeikaJikanByou'] * 1000)/10}％】`
    }
  },
  methods:{
    cycleTimeArrayUD(){
      this.$store.commit('timeBank/cycleTimeArrayUD',{machineCode:"LN034",timeDeff:345})
    },
    cyclesArrayUD(){
      this.$store.commit('timeBank/cyclesArrayUD',"LN034")
    },
    statusArryUD(){
      this.$store.commit('timeBank/statusArryUD',"LN034")
    },
    cycleCounterUD(){
      this.$store.commit('timeBank/cycleCounterUD',"MC027")
    },

    Spark(){
      this.$store.commit('timeBank/sparkValueUD',{machineCode:"LN034",numIndex:0,nowVal:30})
      // this.$store.commit('timeBank/sparkValueUD',{machineCode:"MC027",numIndex:7,nowVal:30})
    },
    test2(){
      let finalH2 =6
      for (let i = 1; i < finalH2; i++) {
        console.log(i);
        // その他の文
     }
        // for(let i=1;i<finalH;i++){     //第に領域(二時間以上乖離している場合の中間)の時間
        //   elapsed_XX[i+(TgtHStart-8)]=60;                      //【とりあえず】分として代入  差が１の場合はループ処理無しとなる
        //   finalH ++;
        //   console.log("For内部は"+finalH)
        // console.log("For内部はiは、"+i)
        // }
    },
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
      // console.log('fire!');
      // console.log('fire!2');
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
      let startD = new Date(y2,m2,d3,7,0,0);
      let endD = new Date(y2,m2,d3,23,59,59);
      let startTimestamp = String(Date.parse(startD));
      let endTimestamp = String(Date.parse(endD));

      const database = firebase.database();

      const CrtTgt = database.ref('CurrentTarget/') //現在加工中の部品を定義している

      CrtTgt.on('value',(snapshot)=>{
        let CrtTgt_data = snapshot.val(); 
        for(let i in CrtTgt_data){
          let TgtData = CrtTgt_data[i];
          let KishuHinmeiKijunsu = TgtData.zuban1 + TgtData.hinmei +"  "+ String(TgtData.kijunsu)+"ｹ";
          this.$store.commit('timeBank/CurrentTargetUD',{TgtMachine:TgtData.machine,TgtValue:KishuHinmeiKijunsu});
        }
      });

      //startTime は初期値９９９を代入していたので、初回が反応していなかったというミス endTimeにしたことで解決。
      const esp = database.ref('NishioMachineCT/')
                  .orderByChild('endTime').startAt(startTimestamp).endAt(endTimestamp); 
      //====================================================================
      esp.on('value',(snapshot)=>{
      //Vuexのデータをリセットする=================================
      //考え方は、毎回リセットをかけて１から全計算する。
      // console.log("initialize!");
      for (let machine of Object.keys(this.$store.getters['timeBank/getStopWatchArrayPrimitive'])) {
        this.$store.commit('timeBank/cycleTimeArrayUD',machine);
        this.$store.commit('timeBank/cycleCounterRst',machine);
        this.$store.commit('timeBank/cycleCounterErrRst',machine);
        this.$store.commit('timeBank/cycleCounterDDRRst',machine);
        this.$store.commit('timeBank/cycleTimeArrayRst',machine);
        this.$store.commit('timeBank/cycleTimeArrayErrRst',machine);
        this.$store.commit('timeBank/cycleTimeArrayDDRRst',machine);
        this.$store.commit('timeBank/cycleTimeArrayMaijiRst',machine);
      }
      //============================================================
        this.data_kadou=[];
        this.data_Teishi=[];
        this.data_kadou_total=123;
        // this.$store.commit('kadouJikanReset')
        this.data_Teishi_Title = [];
        this.labelSample=[];
        this.lastD=0;
        this.count = 0;
        this.dataCount = 0;
          let data = snapshot.val();  
            for(let i in data){
            
            let person = data[i];
            let nowDate=new Date();     //現在時刻
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
            let TgtDEnd=new Date(Number(person.endTime)); // センシング終了時刻
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
            let Tgt_HMS = 
                                      `${this.zeroPadding(TgtH,2)}: 
                                      ${this.zeroPadding(TgtM,2)}: 
                                      ${this.zeroPadding(TgtS,2)} `;
            let Org_HMS = 
                          `${this.zeroPadding(TgtH,2)}時${this.zeroPadding(TgtM,2)}分${this.zeroPadding(TgtS,2)}秒 `;
            if(nowYYYYMMDD == TgtYYYYMMDD_Org){   
              let TgtDStart=new Date(Number(person.startTime));
              let TgtYYYYstart=String(TgtDStart.getFullYear());
              let TgtMMstart=String(TgtDStart.getMonth()+1);
              let TgtDDStart=String(TgtDStart.getDate());
              let TgtHStart=String(TgtDStart.getHours());
              let TgtMStart=String(TgtDStart.getMinutes());
              let TgtSStart=String(TgtDStart.getSeconds());

              //StarとEndの差分 ミリSEcondsを除外した時間
              let TimeDeff = (Number(person.endTime) - Number(person.startTime))/1000  

              let timeElapsed = new Date(TgtDEnd-TgtDStart);
              let hour = this.zeroPadding(timeElapsed.getUTCHours(),2);
              let min = this.zeroPadding(timeElapsed.getUTCMinutes(),2);
              let sec = timeElapsed.getUTCSeconds();
              let ms = this.zeroPadding(timeElapsed.getUTCMilliseconds(),3);

              //停止時点での経過時間の秒変換
              let timeElapsedSec=timeElapsed.getUTCHours()*3600+timeElapsed.getUTCMinutes()*60+timeElapsed.getUTCSeconds;
              // console.log('fire!3');
              const TgtMachine=person.machine;
              // this.$store.commit('timeBank/cycleArrayUpdate',TimeDeff);
              // this.$store.commit('timeBank/cycleArrayUpdate',{machineCode:'MC027',timeDeff:1000});

              // if(person.startTime != '999' && TimeDeff > 5){ //５秒以下のチャタリングのようなデータを排除する
              
              // if(person.startTime != '999'){ //
                
                this.TimeIncrease[Number(person.Status)-1] += TimeDeff
                // console.log("ステータスは"+person.status);
                //センサーの状況を読み取るswitch================================
              switch(person.status){
                case 'RUN1'://正常運転のスタート

                    // console.log("RUN1RUN1RUN1");
                    if(TimeDeff > 2 ){ //2秒以下のチャタリングのようなデータを排除する
                      this.dataCount++;
                      //store.timeBankのステータス状況をセットする（１は運転中）
                      this.$store.commit('timeBank/statusArryUD',{machineCode:TgtMachine,statusBool:1});
                      
                      //store.timeBankのカウンター連想配列をアップ
                      this.$store.commit('timeBank/cycleCounterUD',TgtMachine);
                    };
                    break;
                case 'RUN2': //正常運転の停止
                    //store.timeBankのステータス状況をセットする(0は停止)

                    //予め現在のステータスが運転中であることを確認する。チャタリング防止策からの重複になることを避ける為
                    if(this.$store.getters['timeBank/getStatus'](TgtMachine)==1){

                      this.$store.commit('timeBank/statusArryUD',{machineCode:TgtMachine,statusBool:0});
                      
                      //store.timeBankのサイクルタイム運転時間を合計していく (UD:trueは、書き換えアップデート)
                      this.$store.commit('timeBank/cycleTimeArrayUD',{machineCode:TgtMachine,timeDeff:TimeDeff,UD:true});
                      //機械ごとの毎時時間を算出ｓモジュール
                      //7番目の0が運転中の時間時間（1が段取り、2が）
                      this.MaijiArrayVuexSet(TgtHStart,TgtH,TgtDStart,TgtDEnd,TgtMachine,TimeDeff,0,'timeBank/cycleTimeArrayMaijiUD');
                      
                      
                      //store.timeBankのセンシング時間・・・本プログラムの反応時刻数値
                      this.$store.commit('timeBank/sensingTimeArryUD',{machineCode:TgtMachine,sensingTime:TgtDEnd});
                      
                      //store.timeBankのセンシング時間・テキスト形式
                      this.$store.commit('timeBank/sensingTimeStArryUD',{machineCode:TgtMachine,sensingTime:Tgt_HMS});
                      
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
                      
                    };
                    break;

                  case 'DDR1': //段取りの開始(2は異常停止赤ランプ)
                    //store.timeBankのステータス状況をセットする（１は運転中）

                    if(TimeDeff > 2){ //2秒以下のチャタリングのようなデータを排除する
                      this.$store.commit('timeBank/statusArryUD',{machineCode:TgtMachine,statusBool:3});          
                      //store.timeBankのカウンター連想配列をアップ
                      this.$store.commit('timeBank/cycleCounterDDRUD',TgtMachine);
                    };
                    break;

                  case 'DDR2': //段取りの終了
                      //予め現在のステータスが段取り中であることを確認する。チャタリング防止策からの重複になることを避ける為
                      if(this.$store.getters['timeBank/getStatus'](TgtMachine)==3){

                        //store.timeBankのステータス状況をセットする（0は停止）
                        this.$store.commit('timeBank/statusArryUD',{machineCode:TgtMachine,statusBool:0}); 
                        
                        //store.timeBankのサイクルタイム運転時間を合計していく
                        this.$store.commit('timeBank/cycleTimeArrayDDRUD',{machineCode:TgtMachine,timeDeff:TimeDeff});

                        //機械ごとの毎時時間を算出ｓモジュール
                        //7番目の0が運転中の時間時間（1が段取り、2が）
                        this.MaijiArrayVuexSet(TgtHStart,TgtH,TgtDStart,TgtDEnd,TgtMachine,TimeDeff,1,'timeBank/cycleTimeArrayMaijiUD');
                      };
                      break;

                  case 'ERR1': //異常停止の開始(2は異常停止赤ランプ)
                    // if(TimeDeff > 2){ //2秒以下のチャタリングのようなデータを排除する
                      //store.timeBankのステータス状況をセットする（１は運転中）
                      this.$store.commit('timeBank/statusArryUD',{machineCode:TgtMachine,statusBool:2});
                      
                      //store.timeBankのカウンター連想配列をアップ
                      this.$store.commit('timeBank/cycleCounterErrUD',TgtMachine);
                      break;
                    // };
                  case 'ERR2': //異常停止の終了
                      //予め現在のステータスが異常停止中であることを確認する。チャタリング防止策からの重複になることを避ける為
                      if(this.$store.getters['timeBank/getStatus'](TgtMachine)==2){
                        //store.timeBankのステータス状況をセットする（0は停止）
                        this.$store.commit('timeBank/statusArryUD',{machineCode:TgtMachine,statusBool:0}); 
                                      
                        //store.timeBankのサイクルタイム運転時間を合計していく
                        this.$store.commit('timeBank/cycleTimeArrayErrUD',{machineCode:TgtMachine,timeDeff:TimeDeff});

                        //機械ごとの毎時時間を算出するモジュール
                        //7番目の0が運転中の時間時間（1が段取り、2が）
                        this.MaijiArrayVuexSet(TgtHStart,TgtH,TgtDStart,TgtDEnd,TgtMachine,TimeDeff,2,'timeBank/cycleTimeArrayMaijiUD');
                      };  
                      break;

                  
                  default:
                      console.log("switch,一致しない");
                    break;
                }
                //==============================================================


                //store.timeBankのセンシング時間・・・本プログラムの反応時刻数値
                this.$store.commit('timeBank/sensingTimeArryUD',{machineCode:TgtMachine,sensingTime:TgtDEnd}); 
                //store.timeBankのセンシング時間・テキスト形式
                this.$store.commit('timeBank/sensingTimeStArryUD',{machineCode:TgtMachine,sensingTime:Tgt_HMS}); 
              
  
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
            this.started = setInterval(this.keikaJikan, 1000);
          })//esp.onの終わり
          
          
        },//fire の終わり
        
MaijiArrayVuexSet:function(TgtHStart,TgtH,TgtDStart,TgtDEnd,TgtMachine,TimeDeff,nowTgtState,TgtCommit){
    //機械ごと時間あたり運転時間のサイクルタイムを分解・生成する 最長１０時間まで対応===========================
    let elapsed_XX=[0,0,0,0,0,0,0,0,0,0,0]
    //機械ごと時間あたり段取り時間のサイクルタイムを分解・生成する 最長１０時間まで対応===========================
    // let elapsed_XD=[0,0,0,0,0,0,0,0,0,0,0]
    //機械ごと時間あたり異常時間のサイクルタイムを分解・生成する 最長１０時間まで対応===========================
    // let elapsed_XE=[0,0,0,0,0,0,0,0,0,0,0]

    // console.log("Startは、"+TgtDStart);
    // console.log('エンドは、'+TgtDEnd);

    if(TgtHStart==TgtH){
        //StartとEndの時刻の時が同じ場合
        elapsed_XX[Number(TgtHStart)-8] =TimeDeff   //午前８時を配列ゼロからとする補正
    }else{
      
      let nowTgtDEndZero= new Date(TgtDEnd);             //１時間をまたいだ終了時の時刻連番を基準時刻にセット
      nowTgtDEndZero.setHours(Number(TgtHStart)+1);    //基準時刻の時を＋１の時刻にセット
      nowTgtDEndZero.setMinutes(0);            //基準時刻の分をゼロにセット
      nowTgtDEndZero.setSeconds(0);            //基準時刻の分をゼロにセット
      
      let nowDeff = new Date(nowTgtDEndZero-TgtDStart);
      let ByouHenkanMin = nowDeff.getMinutes()*60;
      let ByouHenkanSec = nowDeff.getSeconds();
      let ByouHenkan =  ByouHenkanMin + ByouHenkanSec;

      elapsed_XX[TgtHStart-8]= ByouHenkan; //第一領域(Startから次時の00分)の時間
      let finalH=Number(TgtH)-Number(TgtHStart);

      //第二領域(二時間以上乖離している場合の中間)の時間
      for (let i = 1; i < finalH; i++) {
        elapsed_XX[i+(Number(TgtHStart)-8)]=3600;
    }

      //第三領域時＋１の時間を計算する
      let nowDeff3rd = new Date(TgtDEnd-nowTgtDEndZero);
      // console.log(nowDeff3rd);
      let ByouHenkanMin3rd = nowDeff3rd.getUTCMinutes()*60;
      let ByouHenkanSec3rd = nowDeff3rd.getUTCSeconds();
      elapsed_XX[Number(TgtHStart)-8+finalH] =ByouHenkanMin3rd+ByouHenkanSec3rd; 
    };


    // this.$store.commit('timeBank/cycleTimeArrayMaijiUD',{
    this.$store.commit(TgtCommit,{
      machineCode:TgtMachine,
      start:TgtHStart,//スタート時間の時
      end:TgtH,       //エンド時間の時
      elapsed:elapsed_XX,
      timeDeff:TimeDeff,
      nowTgt:nowTgtState
    });
    //===================================================================================================
},

keikaJikan:function(){
      // console.log(this.getSensingTimeStart);


      
      const ddd= new Date();
      const ddd2 = new Date();
      ddd2.setHours(8,0,0);

      // console.log("Hello");
      for(let i =0;i < 14;i++) {   //除外時間の時間設定（休憩時間等）
        this.excludeSetTime[i] = new Date() ;
      };
      
      this.excludeSetTime[0].setHours(8,0,0);
      this.excludeSetTime[1].setHours(9,0,0);
      this.excludeSetTime[2].setHours(10,0,0);
      this.excludeSetTime[3].setHours(10,10,0);
      this.excludeSetTime[4].setHours(11,0,0);
      this.excludeSetTime[5].setHours(12,0,0);
      this.excludeSetTime[6].setHours(12,50,0);
      this.excludeSetTime[7].setHours(14,0,0);
      this.excludeSetTime[8].setHours(15,0,0);
      this.excludeSetTime[9].setHours(15,10,0);
      this.excludeSetTime[10].setHours(16,0,0);
      this.excludeSetTime[11].setHours(17,0,0);
      this.excludeSetTime[12].setHours(18,0,0);
      this.excludeSetTime[13].setHours(19,0,0);
      
      switch(true){
          //現在時間によって、休憩など除外時間を計算＆セット

          //合わせて、時間あたりの稼働時間を算出する。時間をまたぐケースもあり、下記３パターンの若干複雑なロジック
          //時が同じ場合
          //時が＋１だけまたいでいる場合
          //時が＋２以上またいでいる場合
          case (ddd<this.excludeSetTime[2]): //10:より以前
            this.excludedTime = [0,0,0];
            break;
          case (ddd<this.excludeSetTime[3])://10:10より以前
            this.excludedTime = [new Date(ddd-this.excludeSetTime[2]).getMinutes(),0,0];
            break;
          case (ddd<this.excludeSetTime[5])://12:00
            // console.log("");
            this.excludedTime = [10,0,0];
            // console.log(this.excludedTime);
            break;
          case (ddd<this.excludeSetTime[6])://12:50
            this.excludedTime =[10,new Date(ddd-this.excludeSetTime[3]).getMinutes(),0]
            break;
          case (ddd<this.excludeSetTime[8])://15:00
            this.excludedTime=[10,50,0];
            break;
          case (ddd<this.excludeSetTime[9])://15:10
            this.excludedTime=[10,50,new Date(ddd-this.excludeSetTime[5]).getMinutes()];
            break;
          case (ddd<this.excludeSetTime[13])://19:00
            this.excludedTime = [10,50,10];
            break;
          case (ddd>this.excludeSetTime[13])://19:00
            this.excludedTime = [10,50,10];
            break;
          default:
            break;
          };
          //休憩時間などの除外時間を合計
          let excludedTime_Total=this.excludedTime[0]+this.excludedTime[1]+this.excludedTime[2];
          // console.log(excludedTime_Total);

      //午前８時を起点として休憩等の除外時間を覗いた正味の稼働時間（時刻連番データ）
      let shomiTime_tmp = new Date(ddd-ddd2);
      //午前８時を起点として休憩等の除外時間を覗いた正味の稼働時間（時刻連番データ）から除外時間を引いた時間
      shomiTime_tmp.setMinutes(shomiTime_tmp.getMinutes()-excludedTime_Total);
      //正味稼働時間（生データ）をtimeBankに送信する（稼働率算出の分母となる）
      this.$store.commit('timeBank/TB_Kadoujikan',shomiTime_tmp);

      let shomiTime_H2= shomiTime_tmp.getUTCHours();
      let shomiTime_M2 = shomiTime_tmp.getUTCMinutes();
      let shomiTime_S2 = shomiTime_tmp.getUTCSeconds();

      let tmp_Byou = shomiTime_H2 *3600 +shomiTime_M2 * 60 + shomiTime_S2  //秒に変換
      
      // this.KadouJikan_Byou_Test=tmp_Byou;
      //正味稼働時間（秒）をtimeBankに送信する（稼働率算出の分母となる）
      this.$store.commit("timeBank/ProgressSecondsUD",tmp_Byou);

      let shomiTimeTotal = shomiTime_H2*60 + shomiTime_M2 + (shomiTime_S2/60);

      //正味稼働時間
      this.KadouJikan = `${shomiTime_H2}:${String(shomiTime_M2).padStart(2,'0')}:${String(shomiTime_S2).padStart(2,'0')}`;

      //現在時刻のテキストデータを生成
      this.GenzaiJikan = `${String(ddd.getHours()).padStart(2,'0')}:${String(ddd.getMinutes()).padStart(2,'0')}:${String(ddd.getSeconds()).padStart(2,'0')}`;

      //現在時刻のテキストデータをVuexに送信
      this.$store.commit("timeBank/genzaiJikanUD",this.GenzaiJikan);
      
      //forで回して、機械ごとのストップウォッチ時刻を更新する================================
      for (let machine of Object.keys(this.$store.getters['timeBank/getStopWatchArrayPrimitive'])) {
        const tgtMachine = machine;
        const tmp=this.$store.getters['timeBank/getSensingTime'](tgtMachine);

        const d= new Date(Date.now()-tmp);


        //純粋な引き算のストップウォッチなので、UTC時間（世界標準で時差考慮せず）を使用する
        const h1 = d.getUTCHours();
        const m1 = d.getUTCMinutes();
        const m1x = d.getUTCHours()*60 + m1;
        const s1= d.getUTCSeconds();

        const h2 = String(h1).padStart(2,'0');
        const m2 = String(m1).padStart(2,'0');
        const m2x = String(m1x);

        const s2 = String(s1).padStart(2,'0');

        const hms = `${h2}:${m2}:${s2}`;
        const ms2 =`${m2x}分${s2}秒`; //時分秒よりも、分秒の方がわかりやすいので変更 '21/3/3
        const secondsValue = h1*3600 + m2 * 60 + s1;
        this.$store.commit("timeBank/StopWatchArryUD",{machineCode:machine,StopWatchTime:ms2,StopWatchSecondsTime:secondsValue});

        // console.log("現在のステータは、"+this.$store.getters['timeBank/getStatus'](machine));
        // let nowStatus= this.$store.getters['timeBank/getStatus'](machine);
        // if(nowStatus=="1"){
        //   this.$store.commit('timeBank/cycleTimeArrayUD',{machineCode:machine,timeDeff:0,UD:false});
        // };
      
      };

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
    },
    // clockRunning:function(){
    //   //たぶんコレは使っていない。2/22

    //   let currentTime = new Date();
    //   timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration);
    //   hour = this.zeroPadding(timeElapsed.getUTCHours(),2);
    //   min = this.zeroPadding(timeElapsed.getUTCMinutes(),2);
    //   sec = timeElapsed.getUTCSeconds();
    //   ms = this.zeroPadding(timeElapsed.getUTCMilliseconds(),3);

    //   this.time = hour + ':' + min + ':' + this.zeroPadding(sec,2) + '.' + ms

    // },
  }

}