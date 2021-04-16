<template>
  <dir>
    <v-card
      class="mt-1 mb-1 mx-auto"
      width="300px"
      height="400px"
      elevation="20"
    >

      <v-container class="grey lighten-5">
        <v-row no-gutters class="mb-0 pa-0">
          <v-col cols="4" fluid class="mt-5 pa-0">
          </v-col>

          <v-col cols="8">

            <v-row class="mt-0 pa-0">
              <p
                class="indigo--text ml-12 mt-2 mb-0 mr-1  text-right text--lighten-2 font-weight-bold headline"
              >
              </p>
            </v-row>
          </v-col>
        </v-row>
        <LineChart2
          class="mt-2"
          :data="Line_chartData"
          :options="Line_options"
          :width="400"
          :height="400"
        />
        <p
          class="grey--text mt-1 mb-0 ml-3 text-center  text--darken-1 font-weight-bold subtitle2"
        >
          {{ chokuzenSW }}
        </p>
      </v-container>
    </v-card>
  </dir>
</template>

<style>
</style>

<script>
import Vue from "vue";
import Vuex from "vuex";
import BarChart from "@/components/BarChart.vue";
import LineChart2 from "@/components/LineChart2.vue";

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"]
];
export default {
  // tgtMachine:"",
  props: ["name"],
  // props:{
  //   nameA:"name"
  // },
  data() {
    return {
      // nameAB:'MC027'
      // testData:'',
      // btnName: '追加',
      isRed: false,
      isTgt: false,
      nameAB: this.name, //propsからdataに移すことで、
      //変数として利用できるようになる。
      chokuzenSW: "",

      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      defferenceTime: 0,
      KeikaJikanTime: "00:00:00",

      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
      //稼働率折れ線グラフ->棒グラフに変更**********************************
      Line_chartData: {
        labels: [
        ],
        
        // データ詳細
        datasets: [
          {
            label: ["RUN"],
            // backgroundColor: ['aqua','red','blue','lime','fuchsia','green','yellow','maroon','navy'],
            // backgroundColor: "limegreen",
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(200, 100, 86, 0.9)',
                
            ],
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },

        ]
      },
      Line_options: {
        responsive: true,
        title: {
          display: true, // タイトルを表示する
          text: '直近のマシンアワー比較' // タイトルのテキスト
        },
        legend: {
          // position: 'right',
          display: false,
          labels: {
            // fontSize: 28,
          }
        },
        scales: {
          // 軸設定
          xAxes: [
            // Ｘ軸設定
            {
              stacked: true, //積み重ねは、X,Yそれぞれにtrue
              scaleLabel: {
                // 軸ラベル
                display: true, // 表示設定
                labelString: "マシンアワー（分）", // ラベル
                fontColor: "grey", // 文字の色
                fontSize: 12 // フォントサイズ
              },
              gridLines: {
                // 補助線
                // color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                color: "rgba(0, 0, 255, 0.2)" // 補助線の色
              },
              ticks: {
                // 目盛り
                fontColor: "grey", // 目盛りの色
                fontSize: 12 // フォントサイズ
              }
            }
          ],
          yAxes: [
            // Ｙ軸設定
            {
              // stacked:true,
              stacked: true,
              scaleLabel: {
                // 軸ラベル
                display: false, // 表示の有無
                labelString: "縦軸ラベル", // ラベル
                fontFamily: "sans-serif",
                fontColor: "grey", // 文字の色
                fontFamily: "sans-serif",
                fontSize: 20 // フォントサイズ
              },
              gridLines: {
                // 補助線
                color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                zeroLineColor: "black" // y=0（Ｘ軸の色）
              },
              ticks: {
                // 目盛り
                min: 0, // 最小値
                // max: 3600, // 最大値
                // max: 0, // 最大値
                suggestedMax: 10,
                stepSize:2, // 軸間隔
                fontColor: "grey", // 目盛りの色
                fontSize: 14 // フォントサイズ
              }
            }
          ]
        }
        // {responsive: true,
        //    maintainAspectRatio: false,
        //   maintainAspectRatio: true,
        //   animation: true,
        //   legend: {
        //               display: false
        //           }
      },
      addFlag: false
      //=********************************************************************
    };
  },
  components: {
    BarChart,
    LineChart2
  },
  computed: {

    getNow:function(){
      let Tgt = new Date();
      Tgt = this.$store.getters['getNow'];
      return Tgt
    },
    getGenzaiJikan(){
      //現在までの経過時間（投入工数）
      return this.$store.getters["timeBank/getKeikaJikanByou"]
    },
    // getSensingTimeStart(){
    //   return this.$store.getters['timeBank/getSensingTime'](this.nameAB)
    // },
    getCurrentTarget: function() {
      return this.$store.getters["timeBank/getCurrentTarget"](this.nameAB);
    },
    getCycleArray: function() {
      return this.$store.getters["timeBank/ getCycleArray"](this.nameAB);
    },
    getProgressSeconds: function() {
      return this.$store.getters["timeBank/getProgressSeconds"];
    },
    getSensingStTime() {
      return this.$store.getters["timeBank/getSensingStTime"](this.nameAB);
    },
    getStopWatchArray() {
      if (this.getCountData == 0) {
        return "0分00秒";
      } else {
        return this.$store.getters["timeBank/getStopWatchArray"](this.nameAB);
      }
    },
    getStopWatchSecondsArray() {
      return this.$store.getters["timeBank/getStopWatchSecondsArray"](
        this.nameAB
      );
    },
    // StopWatch(){
    //   return this.$store.getters['timeBank/getStopWatchArray'](this.nameAB)
    // },
    value3() {
      return this.$store.getters["timeBank/getSpark"](this.nameAB);
    },

    getStatusData() {
      return this.$store.getters["timeBank/getStatus"](this.nameAB);
    },
    //機械の稼働時間秒数
    //運転中は時間が加算されるようにして、稼働率を正確に把握する
    //マシンアワーの長いものでは特に有効となる
    getTimeData() {
      let RunningTime = 0;
      if (this.$store.getters["timeBank/getStatus"](this.nameAB) == 1) {
        RunningTime = this.$store.getters["timeBank/getStopWatchSecondsArray"](
          this.nameAB
        );
      } else {
        RunningTime = 0;
      }
      let CycleTimeTotal = this.$store.getters["timeBank/getCycleArray"](
        this.nameAB
      );
      return CycleTimeTotal + RunningTime;
    },

    getTimeDataMS() {
      let M = Math.floor(this.getTimeData / 60);
      let S = this.getTimeData % 60;

      return M + "分" + S.toString().padStart(2, "0") + "秒";
    },

    calcMachineRate() {
      //機械の現在稼働率
      // let UntenSeconds = this.$store.getters['timeBank/getCycleArray'](this.nameAB);
      let UntenSeconds = this.getTimeData;
      let KadouSeconds = this.$store.getters["timeBank/getProgressSeconds"];
      // return (Math.round((UntenSeconds/KadouSeconds)*100000))/10000
      return (((UntenSeconds / KadouSeconds) * 10000) / 100).toFixed(1);
    },
    calcMachineRateDDR() {
      //段取り時間の率
      // let UntenSeconds = this.$store.getters['timeBank/getCycleArray'](this.nameAB);
      let DandoriSeconds = this.$store.getters["timeBank/getCycleArrayDDR"](
        this.nameAB
      );
      let KadouSeconds = this.$store.getters["timeBank/getProgressSeconds"];
      // return (Math.round((UntenSeconds/KadouSeconds)*100000))/10000
      return (((DandoriSeconds / KadouSeconds) * 10000) / 100).toFixed(1);
    },

    // getTimeDataErr_generateMS(){//機械のエラー時間秒数
    //   return this.$store.getters['timeBank/getCycleArrayErr'](this.nameAB)
    //   // return this.$store.getters['timeBank/getCycleArray2'](this.nameAB)
    // },
    getTimeDataErr_generateMS() {
      //機械のエラー時間秒数
      let M = Math.floor(
        this.$store.getters["timeBank/getCycleArrayErr"](this.nameAB) / 60
      );
      let S =
        this.$store.getters["timeBank/getCycleArrayErr"](this.nameAB) % 60;

      return M + "分" + S.toString().padStart(2, "0") + "秒";
    },
    getTimeDataDDR_generateMS() {
      //機械の段取り時間秒数
      let M = Math.floor(
        this.$store.getters["timeBank/getCycleArrayDDR"](this.nameAB) / 60
      );
      let S =
        this.$store.getters["timeBank/getCycleArrayDDR"](this.nameAB) % 60;

      return M + "分" + S.toString().padStart(2, "0") + "秒";
    },

    getCountData() {
      return this.$store.getters["timeBank/getCycleCounterData"](this.nameAB);
    },
    getCountErrData() {
      return this.$store.getters["timeBank/getCycleCounterDataErr"](
        this.nameAB
      );
    },
    getCycleCounterDataDDR() {
      return this.$store.getters["timeBank/getCycleCounterDataDDR"](
        this.nameAB
      );
    },

  },
  watch: {
    getCurrentTarget: function(newTgt, oldTgt) {
      this.isTgt = true;

    },
  },
  mounted: function() {
    this.graphUD();
  },
  methods: {
    sleep: function(waitSec, callbackFunc) {
      //setTimeoutのサンプル。ちゃんと動くことは確認済
      var spanedSec = 0;
      var waitFunc = function() {
        spanedSec++;
        if (spanedSec >= waitSec) {
          if (callbackFunc) callbackFunc();
          return;
        }
        clearTimeout(id);
        id = setTimeout(waitFunc, 1000);
      };
      var id = setTimeout(waitFunc, 1000);
    },

    redirect: function() {
      this.$router.push("/next?pageName=" + this.name);
    },
    graphUD: function() {
      // console.log("グラフには入っていますよ");

      //折れ線グラフのデータを生成する->積み重ね棒グラフに変更======================================
      // console.log("グラフには入っていますよ");
      this.Line_chartData.labels=[];
      this.Line_chartData.datasets[0].data=[];
      let standArryMachine = this.$store.getters["timeBank/getStatusFull"];
      console.log(standArryMachine);
      Object.keys(standArryMachine).forEach(key => 
        this.Line_chartData.labels.push(key)
      );
      console.log(this.Line_chartData.labels);
      // console.log(this.Line_chartData.labels);
      const newChartData2 = Object.assign({}, this.Line_chartData);
      let standArry = this.$store.getters["timeBank/getmachineHourArry"];
      // console.log("h基準1");
      let result = this.Line_chartData.labels.map(function(value,index,array){
        // console.log(this[value]);
        let arr=this[value];
        // arr.push(this[value]);
        // var arr = [1,2,3];
        // var max = arr.reduce(function(a, b) {
        //       return Math.max(a, b);
        // });
        // let max = arry.reduce(function(a,b){
          //   return Math.max(a,b);
        // });
        // return Math.max(this[value]);
        // return max;
        // return arr.reduce((a,b)=>a>b?a:b);
        return Math.max(arr);

      },standArry);
      console.log("resultは、");
          // console.log(arr);
      console.log(result);
      // console.log(max);
      // console.log("standArray!");
      // console.log(standArry);
      Object.keys(standArry).forEach(key => 
        // console.log(standArry[key])
        
        newChartData2.datasets[0].data.push(standArry[key]/60)
        // newChartData.datasets[0].data.push(standArry[key])
        // newChartData.datasets[0].data.push(123)
        //pushで弾かれて２時間以上悩んだが、結果にはinitialize で、
        //datasets[0].dataとすべきところを、datasets[0]としてしまっていただけ！！
      );

      
      // console.log("h基準2");
      // console.log(newChartData2.datasets[0].data);
      this.Line_chartData = newChartData2;

      setTimeout(() => {
        this.graphUD();
      }, 5000); //５秒ごとに更新
    },
    graphUD_Keika() {
      let nowStatus = this.$store.getters["timeBank/getStatus"](this.nameAB);
      if (nowStatus == 1) {
        // unten +=5;
        this.$store.commit("timeBank/cycleTimeArrayUD", {
          machineCode: this.nameAB,
          timeDeff: 5,
          UD: false
        });
      } else if (nowStatus == 2) {
        err += 5;
      }
    }
  }
};
</script>
