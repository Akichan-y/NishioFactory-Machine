<template>
  <dir>
    <v-card>

    日付の設定と、マシンアワー比較グラフを表示
    <!-- {{getStatusFull}} -->

        <v-row no-gutters class="mb-0 pa-0">
          <!-- <v-col cols="4" fluid class="mt-5 pa-0"> -->
            <span width="250px">
              <BarChart :data="Bar_chartData" :options="Bar_options" :height="200" :width="200"
            /></span>
          <!-- </v-col> -->

        </v-row>
    </v-card>
  </dir>
</template>

<style>
</style>

<script>
import Vue from "vue";
import Vuex from "vuex";
// import BarChart from "@/components/BarChart.vue";
// import LineChart from "@/components/LineChart.vue";
import  BarChart from "@/components/machineHourGraph.vue";

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
      // labels: [
      //   "8am",
      //   "9am",
      //   "10am",
      //   "11am",
      //   "1pm",
      //   "2pm",
      //   "3pm",
      //   "4pm",
      //   "5pm",
      //   "6pm"
      // ],
      // value: [200, 675, 410, 390, 310, 460, 250, 240, 240, 3600],

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
      Bar_chartData: {
        labels: [],
        // データ詳細
        datasets: [
          {
            label: ["MachineHour"],
            backgroundColor: "limegreen",
            data: []
          },
          // {
          //   label: ["DDR"],
          //   backgroundColor: "#FFBB00",
          //   data: [0, 50, 0, 0, 200, 0, 0, 0, 0, 0, 0]
          // },
          // {
          //   label: ["ERR"],
          //   backgroundColor: "#D9073D",
          //   data: [0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          // }
        ]
      },
      Bar_options: {
        responsive: true,
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
              stacked: false, //積み重ねは、X,Yそれぞれにtrue
              scaleLabel: {
                // 軸ラベル
                display: false, // 表示設定
                labelString: "横軸ラベル", // ラベル
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
              stacked: false,
              scaleLabel: {
                // 軸ラベル
                display: false, // 表示の有無
                labelString: "縦軸ラベル", // ラベル
                fontFamily: "sans-serif",
                fontColor: "grey", // 文字の色
                fontFamily: "sans-serif",
                fontSize: 12 // フォントサイズ
              },
              gridLines: {
                // 補助線
                color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                zeroLineColor: "black" // y=0（Ｘ軸の色）
              },
              ticks: {
                // 目盛り
                min: 0, // 最小値
                max: 3600, // 最大値
                stepSize: 900, // 軸間隔
                fontColor: "grey", // 目盛りの色
                fontSize: 10 // フォントサイズ
              }
            }
          ]
        }
      },
      addFlag: false
      //=********************************************************************
    };
  },
  components: {
    // BarChart,
    // LineChart
      BarChart
  },
  computed: {
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
    getStatusFull() {
      return this.$store.getters["timeBank/getStatusFull"];
    },
    // getStatus:function(){
    //   return this.$store.getters["timeBank/getStatusFull"];
    // },
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

    getSensingTime() {
      //やめよう！
      // const d= this.$store.getters['timeBank/getSensingTime'](this.nameAB);
      //  console.log(d);
      //純粋な引き算のストップウォッチなので、UTC時間（世界標準で時差考慮せず）を使用する
      // const h = String(d.getUTCHours()).padStart(2,'0');
      // const m = String(d.getUTCMinutes()).padStart(2,'0');
      // const s = String(d.getUTCSeconds()).padStart(2,'0');
      // console.log(`時間は、${h}:${m}:${s}`);
      // return `${h}:${m}:${s}`;
    }
    // getSensingTimeStart(){
    //   return this.$store.getters['timeBank/getSensingTime'](this.nameAB)

    // }
  },
  watch: {
    getCurrentTarget: function(newTgt, oldTgt) {
      // alert(newTgt);

      this.isTgt = true;

      // this.isTgt=false;
      // this.isRed=true;
      // this.sleep(2, function() {
      // // console.log('5秒経過しました！');

      //   this.isTgt=false;
      //   // alert('5秒経過しました！');
      // });
    },
    getStatusData: function(newStatus, oldStatus) {
      this.graphUD();
      // console.log(this.nameAB);
      // console.log("ステータスは、" + newStatus,oldStatus);
      // console.log(this.getStopWatchArray);
      this.chokuzenSW = this.getStopWatchArray;

      switch (oldStatus) {
        case 0: {
          switch (newStatus) {
            case 0: {
              break;
            }
            case 1: {
              this.chokuzenSW = "停止" + this.getStopWatchArray + "後に起動！";
              break;
            }
            case 2: {
              this.chokuzenSW =
                "停止" + this.getStopWatchArray + "後に異常発生！";
              break;
            }
            case 3: {
              this.chokuzenSW =
                "停止" + this.getStopWatchArray + "後から段取中！";
              break;
            }
          }
          break;
        }
        case 1: {
          this.chokuzenSW = "直前の運転は" + this.getStopWatchArray + "でした";
          break;
        }
        case 2:
          {
            switch (newStatus) {
              case 0: {
                this.chokuzenSW =
                  "異常停止" + this.getStopWatchArray + "から復旧！";
                break;
                break;
              }
              case 1: {
                this.chokuzenSW = "運転中に異常発生！";
                break;
              }
              case 2: {
                break;
              }
              case 3: {
                this.chokuzenSW = "段取りからの、異常発生！？";
                break;
              }
            }
          }
          break;
        case 3: {
          this.chokuzenSW = "段取り時間は" + this.getStopWatchArray + "でした";
          break;
        }
      }
    }
  },
  mounted () {
    this.initialize();
    this.graphUD();
  },
  methods: {
    initialize: function(){
      this.Bar_chartData.labels=[];
      this.Bar_chartData.datasets[0].data=[];
      let standArry = this.$store.getters["timeBank/getStatusFull"];
      Object.keys(standArry).forEach(key => 
        // this.$store.commit("timeBank/machineHourArryUD",{machineCode:key,machineHour:0}), 
        this.Bar_chartData.labels.push(key)
      );
      console.log(this.Bar_chartData.labels);

    },
    
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
      this.Bar_chartData.datasets[0].data=[];
      const newChartData = Object.assign({}, this.Bar_chartData);
      let standArry = this.$store.getters["timeBank/getmachineHourArry"];
      // console.log("h基準1");
      // console.log(standArry);
      Object.keys(standArry).forEach(key => 
        // console.log(standArry[key])
        newChartData.datasets[0].data.push(standArry[key])
        // newChartData.datasets[0].data.push(standArry[key])
        // newChartData.datasets[0].data.push(123)
        //pushで弾かれて２時間以上悩んだが、結果にはinitialize で、
        //datasets[0].dataとすべきところを、datasets[0]としてしまっていただけ！！
      );
       console.log("h基準2");
      console.log(newChartData.datasets[0].data);
      this.Bar_chartDatahartData = newChartData;
      // console.log("グラフのセットタイムアウト！！！")
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
}
</script>
