<template>
  <dir>
    <!-- <v-app></v-app>  これを使うと、component配置で上下の感覚がバカ広くなってしまうのでdirに変更-->
    <!-- <v-btn class="red" @click="redirect">Redirectテスト</v-btn> -->
    <!-- <p class="pink--text text--lighten-2 font-weight-bold overline">{{getProgressSeconds}}秒経過</p>
      <p class="green--text text--lighten-2 font-weight-bold subtitle">{{getStopWatchSecondsArray}}</p> -->
    <!-- <v-card width=420px height="280px" elevation="15" color="grey lighten-1"> -->
    <!-- <v-card class="mt-n12 mx-auto" width=300px height="420px" elevation="20" > -->
    <v-card
      class="mt-1 mb-1 mx-auto"
      width="300px"
      height="500px"
      elevation="20"
    >
      <!-- <v-btn @click='Methods_calcMachineRate'>test</v-btn> -->
      <!-- <v-btn @click='btnPie'>test</v-btn>
      <v-btn @click='testtest'>testtest</v-btn> -->
      <!-- <v-btn @click='testtest'>Detail</v-btn> -->

      <v-container class="grey lighten-5">
        <v-row justify="center">
          <div
            class="green-circle btnLamp"
            v-if="getStatusData == 1"
            @click="redirect"
          >
            {{ name }} 運転中 {{ getSensingStTime }}〜
          </div>
          <div
            class="red-circle btnLamp"
            v-else-if="getStatusData == 2"
            @click="redirect"
          >
            {{ name }} 異常発生中 {{ getSensingStTime }}〜
          </div>
          <div
            class="yellow-circle btnLamp"
            v-else-if="getStatusData == 3"
            @click="redirect"
          >
            {{ name }} 段取中 {{ getSensingStTime }}〜
          </div>
          <div
            class="pink-circle btnLamp"
            v-else-if="getStatusData == 4"
            @click="redirect"
          >
            {{ name }} 計画停止中 {{ getSensingStTime }}〜
          </div>
          <div class="black-circle btnLamp" v-else @click="redirect">
            {{ name }} 停止中{{ getSensingStTime }}〜
          </div>
        </v-row>
        <div class="mt-3 ml=2 text-left caption font-size=12px" :class="{ contentTgt: isTgt }">
          {{ getCurrentTarget }}
        </div>
        <!-- <v-btn @click='RstTgt'>Reseet</v-btn> -->

        <v-row no-gutters class="mb-0 pa-0">
          <v-col cols="4" fluid class="mt-5 pa-0">
            <span
              ><BarChart :data="chartData" :options="options" :height="400"
            /></span>
          </v-col>

          <v-col cols="8">
            <!-- <p class="purple--text my-0 mr-5 text-right  text--lighten-2 font-weight-bold headline">{{getSensingStTime}}</p> -->
            <!-- <v-container> -->

            <v-row class="mt-0 pa-0">
              <p
                class="indigo--text ml-12 mt-2 mb-0 mr-1  text-right text--lighten-2 font-weight-bold headline"
              >
                {{ getStopWatchArray }}
              </p>
            </v-row>
            <v-row>
              <v-col>
                <p
                  class="green--text my-0 mr-1 text-right text--lighten-1 font-weight-bold headline"
                >
                  {{ getCountData }}回
                </p>
              </v-col>
              <v-col>
                <p
                  class="green--text my-0 mr-1 text-right  text--lighten-1 font-weight-bold headline"
                >
                  {{ calcMachineRate }}%
                </p>
              </v-col>
            </v-row>
            <!-- </v-container> -->
            <v-row class="mt-0 pa-0">
              <v-col>
                <p
                  class="orange--text my-0 mr-1 text-right text--lighten-1 font-weight-bold headline"
                >
                  {{ getCycleCounterDataDDR }}回
                </p>
              </v-col>
              <v-col>
                <p
                  class="orange--text my-0 mr-1 text-right  text--lighten-1 font-weight-bold headline"
                >
                  {{ calcMachineRateDDR }}%
                </p>
              </v-col>
            </v-row>
            <!-- <p class="green--text mt-0 mr-5 text-right  text--lighten-2 font-weight-bold headline">{{getTimeData}}</p> -->
          </v-col>
        </v-row>
        <LineChart
          class="mt-2"
          :data="Line_chartData"
          :options="Line_options"
          :width="400"
          :height="200"
        />
        <!-- <p class="green--text mt-0 ml-2 text-left  text--lighten-2 font-weight-bold subtitle">{{getTimeDataMS}}</p> -->
        <p class="grey--text mt-1 mb-0 ml-3 text-center  text--darken-1 font-weight-bold subtitle2">
          {{ chokuzenSW }}
        </p>


        <MachineH_Porogress
          class="mt-2"
          :data="Progress_Data"
          :options="Progress_options"
          :width="400"
          :height="200"
        />

        <!-- <table border="1" width="240" class="mt-2">
            <tr  align="center">
                <th></th>
                <th>回数</th>
                <th>時間</th>
            </tr>
            <tr align="center">
              <td>段取り</td>
              <td>{{getCycleCounterDataDDR}}回</td>
              <td>{{getTimeDataDDR_generateMS}}</td>
            </tr>
            <tr align="center">
              <td>異　常</td>
              <td>{{getCountErrData}}回</td>
              <td>{{getTimeDataErr_generateMS}}</td>
            </tr>

          </table> -->
        <!-- <v-sheet height="25px"> -->

        <!-- </v-sheet> -->
        <!-- <v-sheet
                class="v-sheet--offset mt-3"
                color="cyan"
                elevation="1"
                max-width="calc(100% - 10px)"
                
              >

                <v-sparkline
                  :labels="labels"
                  :value="value"
                  color="white"
                  line-width="2"
                  padding="10"
                  class="mt-1"
                ></v-sparkline>
              </v-sheet> -->

        <!-- <p class="pink--text text--lighten-2 font-weight-bold">エラー時間
            :{{getTimeDataErr}}秒</p>
          <p class="pink--text text--lighten-2 font-weight-bold ">エラー発生回数：{{getCountErrData}}回</p> -->
      </v-container>
    </v-card>
  </dir>
</template>

<style>
.redCollor {
  color: red;
}

.contentTgt {
  /* animation: flash 1s linear infinite; */
  animation: flash 1s linear;
  animation-fill-mode: backwards;
  width: 220px;
  /* height:30px; */
  /* background:#0091EA; */
  background: white;
  margin: 5px;
}

@keyframes flash {
  0%,
  35%,
  60%,
  100% {
    opacity: 0;
  }

  25% {
    opacity: 1;
    background: #7fff00;
  }

  50% {
    opacity: 1;
    background: #0091ea;
  }

  75% {
    opacity: 1;
    background: #ff1493;
  }
}
/* @keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */

.cont {
  color: blue;
  font-size: 2em;
  text-align: center;
}

.btnLamp {
  cursor: pointer;

  display: inline-block; /* センター寄せ用 */
  border-radius: 10px; /* まるみ */
  height: 40px; /* 円の大きさ */
  width: 240px; /* 円の大きさ */
  margin-right: 10px;
  margin-bottom: 5px;
  margin-top: 20px;
  text-align: center;
  line-height: 40px;
  user-select: none;
}
.btnLamp:active {
  margin-top: 25px;
  margin-bottom: 0px;
}

.btnLamp:hover {
  opacity: 0.8;
}

.green-circle {
  background-color: rgb(0, 255, 0); /* ベースカラー */
  box-shadow: 0 0 3px 3px rgb(37, 112, 4),
    3px 3px 5px 3px rgb(200, 255, 0) inset; /* 外側のカラー・左上のカラー */

  /* 以下はそろえるだけの為のmargin */
  border-color: red;
}
.red-circle {
  /* display: inline-block; */
  color: white;
  
  background-color: rgb(255, 0, 0);
  box-shadow: 0 0 3px 3px rgb(78, 3, 3),
    3px 3px 5px 3px rgb(238, 161, 147) inset;
}
.yellow-circle {
  /* display: inline-block; */
  color: black;
  background-color: rgb(255, 255, 0);
  box-shadow: 0 0 3px 3px rgb(136, 80, 7),
    3px 3px 5px 3px rgb(247, 238, 161) inset;

}
.pink-circle {
  /* display: inline-block; */
  color: black;
  background-color: rgb(247, 174, 234);
  box-shadow: 0 0 3px 3px rgb(122, 56, 106),
    3px 3px 5px 3px rgb(243, 146, 240) inset;

}
.black-circle {
  /* display: inline-block; */
  color: black;
  background-color: silver;
  box-shadow: 0 0 3px 3px rgb(54, 53, 53),
    3px 3px 5px 3px rgba(172, 169, 169, 0.5) inset;
  /* height:40px;
    width:240px; */
  /* border-radius:10px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 20px;
    text-align: center;
    line-height: 40px;
    user-select: none; */
}
</style>

<script>
import Vue from "vue";
import Vuex from "vuex";
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";
import MachineH_Porogress from "@/components/MachineH_Progress.vue";

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
      chokuzenSW: "aaa",
      labels: [
        "8am",
        "9am",
        "10am",
        "11am",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm"
      ],
      value: [200, 675, 410, 390, 310, 460, 250, 240, 240, 3600],

      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      // value: [10, 8, 3, 9, 7, 10, 3, 2, 0, 0, 1, 3, 2, 2, 0],
      // value2: {LN034:[2, 2, 2, 2, 7, 10, 3, 2, 0, 0],MC027:[10, 8, 8, 9, 7, 10, 3, 2, 0, 8]},
      defferenceTime: 0,
      KeikaJikanTime: "00:00:00",

      //TypeB
      // TypeB = {};
      // TypeB['hoge'] = {fuga : 'piyo'};
      // alert(TypeB['hoge']['fuga']);

      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
      // 円グラフで使用するデータセット**********************************
      chartData: {
        labels: [],
        // データ詳細
        datasets: [
          {
            label: ["運転", "異常", "停止","計画停止"],
            backgroundColor: ["limegreen", "#FFBB00", "#D9073D" ,"#F9C1CF","#AAAAAA"],
            data: [10, 10, 10, 10]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        maintainAspectRatio: true,
        animation: false
      },
      //稼働率折れ線グラフ->棒グラフに変更**********************************
      Line_chartData: {
        labels: [
          "8am",
          "9am",
          "10am",
          "11am",
          "12am",
          "1pm",
          "2pm",
          "3pm",
          "4pm",
          "5pm",
          "6pm",
          "7pm"
        ],
        // データ詳細
        datasets: [
          {
            label: ["RUN"],
            // backgroundColor: ['aqua','red','blue','lime','fuchsia','green','yellow','maroon','navy'],
            backgroundColor: "limegreen",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            label: ["DDR"],
            backgroundColor: "#FFBB00",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            label: ["ERR"],
            backgroundColor: "#D9073D",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            label: ["KKTS"],
            backgroundColor: "#F9C1CF",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },
      Line_options: {
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
              stacked: true, //積み重ねは、X,Yそれぞれにtrue
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
              stacked: true,
              scaleLabel: {
                // 軸ラベル
                display: false, // 表示の有無
                labelString: "分", // ラベル
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
                max: 60, // 最大値
                stepSize: 15, // 軸間隔
                fontColor: "grey", // 目盛りの色
                fontSize: 10 // フォントサイズ
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
      //**********************************
      // マシンアワープログレスバー
      Progress_Data: {
        labels: [
        ],
        
        // データ詳細
        datasets: [
          {
            label: ["RUN"],
            backgroundColor: [
                // 'rgba(50, 255, 0,1.5)',//マシンアワー残り
                'rgba(125,125, 125,0.5)',//マシンアワー残り
                ,//マシンアワー残り
            ],
            data: [0]
          },
          {
            label: ["RUN"],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',//マシンアワー残り
            ],
            data: [0]
          },

        ]
      },
      Progress_options: {
        responsive: true,
        title: {
          display: true, // タイトルを表示する
          text: 'マシンアワーProgressBar' // タイトルのテキスト
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
                labelString: "マシンアワー残り（秒）", // ラベル
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
                min: 0, // 最小値
                max: 600, // 最大値
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
                max: 60, // 最大値
                // max: 0, // 最大値
                suggestedMax: 10,
                stepSize:2, // 軸間隔
                fontColor: "grey", // 目盛りの色
                fontSize: 14 // フォントサイズ
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
    BarChart,
    LineChart,
    MachineH_Porogress
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
      console.log("ストップウォッチは大丈夫なのでは？");
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
            case 4: {
              this.chokuzenSW =
                "停止" + this.getStopWatchArray + "後に計画停止！";
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
              case 4: {
                this.chokuzenSW = "計画停止からの、異常発生！？";
                break;
              }
            }
          }
          break;
        case 3: {
          this.chokuzenSW = "段取り時間は" + this.getStopWatchArray + "でした";
          break;
          }
        case 4: {
          this.chokuzenSW = "計画停止は" + this.getStopWatchArray + "でした";
          break;
        }
      
      }
    }
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
    // btnTest(){
    //   console.log(this.$store.getters['timeBank/getSensingStTime'](this.nameAB));
    // },
    // Methods_calcMachineRate(){  //機械の現在稼働率
    //   let UntenSeconds = this.$store.getters['timeBank/getCycleArray'](this.nameAB);
    //   let KadouSeconds = this.$store.getters["timeBank/getProgressSeconds"];
    //   // return Math.round((UntenSeconds/KadouSeconds)*100)
    //   alert(Math.round((UntenSeconds/KadouSeconds)*1000)/10+"%");
    // },
    // btnPie(){ //テスト用プログラム
    //   const newChartData = Object.assign({}, this.chartData)

    //   for(let i=0;i<3;i++){
    //     let value = Math.floor(Math.random() * Math.floor(100));
    //     console.log(value);
    //     newChartData.datasets[0].data[i] = value;
    //     console.log(newChartData.datasets[0].data.i);
    //     console.log(newChartData.datasets[0].data);
    //     this.chartData = newChartData
    //   }
    //   this.chartData = newChartData //全体稼働率円グラフ

    //   console.log("ｺﾝﾎﾟｰﾈﾝﾄ内折れ線ｸﾞﾗﾌﾃﾞｰﾀ生成を、はじめます")
    //   const Line_newChartData = Object.assign({}, this.Line_chartData)

    //   for(let i=0;i<3;i++){
    //     let value = Math.floor(Math.random() * Math.floor(100));
    //     console.log(value);
    //     newChartData.datasets[0].data[i] = value;
    //     console.log(newChartData.datasets[0].data.i);
    //     console.log(newChartData.datasets[0].data);
    //     this.chartData = newChartData
    //   }
    //   this.chartData = newChartData //全体稼働率円グラフ

    //   setTimeout(() => {
    //     // if (this.addFlag) {
    //       this.graphUD();
    //     // }
    //   }, 5000); //５秒数ごとに更新

    // },
    // testtest: function() {
    //   console.log(this.$store.getters['timeBank/getStatus'](this.nameAB));
    //   console.log(this.$store.getters["timeBank/getCycleArray"](this.nameAB));
    //   console.log(this.$store.getters["timeBank/getCycleCounterData"](this.nameAB));
    // },
    graphUD: function() {
      //部品名変更時のStyleリセット。ここに置くのはいささかダサいが、他で有効な場所を見つけることが出来ないのでｈしかななし。
      this.isTgt = false;

      //円グラフのデータを生成する
      const newChartData = Object.assign({}, this.chartData);

      let kadou = this.$store.getters["timeBank/getProgressSeconds"];
      let unten = this.$store.getters["timeBank/getCycleArray"](this.nameAB);

      // ↑↓この２つの値を、時間経過モジュールでUDする修正が必要
      let err = this.$store.getters["timeBank/getCycleArrayErr"](this.nameAB);
      // console.log("ERR"+this.nameAB+"---"+err);
      let ddr = this.$store.getters["timeBank/getCycleArrayDDR"](this.nameAB); //段取り時間
      let kkt = this.$store.getters["timeBank/getCycleArrayKKT"](this.nameAB); //計画停止時間

      newChartData.datasets[0].data[0] = unten;
      newChartData.datasets[0].data[1] = ddr;
      newChartData.datasets[0].data[2] = err;
      newChartData.datasets[0].data[3] = kkt;
      newChartData.datasets[0].data[4] = kadou - unten - ddr - err -kkt;
      // console.log(newChartData.datasets[0])
      this.chartData = newChartData;

      //折れ線グラフのデータを生成する->積み重ね棒グラフに変更======================================
      const Line_newChartData = Object.assign({}, this.Line_chartData);

      //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
      //2021/2/29 sun 22:07 index.vueで存在しないprops(MC030)を与えたことにより、
      //Line_unten.lengthがundefinedになった。解決に数時間を要した！
      //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

      //毎時の機械ごとの運転時間合計の毎時配列データ
      let Line_unten = this.$store.getters["timeBank/getcycleTimeMaijiArray"](
        this.nameAB
      );
      let Line_DDR = this.$store.getters["timeBank/getcycleTimeMaijiArrayDDR"](
        this.nameAB
      );
      let Line_ERR = this.$store.getters["timeBank/getcycleTimeMaijiArrayERR"](
        this.nameAB
      );
      let Line_KKT = this.$store.getters["timeBank/getcycleTimeMaijiArrayKKT"](
        this.nameAB
      );
      
      // console.log("☆☆☆☆計画停止時間は、"+Line_KKT);
      // console.log("☆☆☆☆計画停止時間は、"+this.$store.getters["timeBank/getcycleTimeMaijiArrayKKT"]);
      // console.log("☆☆☆☆"+this.nameAB);
      // console.log("☆☆☆☆"+this.nameAB);
      // console.log("★★★★★★★★★★★"+Line_unten);
      // let len = Line_unten.length;
      // console.log("Lengthは、" + Line_unten.length);
      for (let i = 0; i < Line_unten.length; i++) {
        // console.log("For "+i+" 回目"+Line_newChartData.datasets[0].data[i]);
        Line_newChartData.datasets[0].data[i] = Line_unten[i]/60;
        Line_newChartData.datasets[1].data[i] = Line_DDR[i]/60;
        Line_newChartData.datasets[2].data[i] = Line_ERR[i]/60;
        Line_newChartData.datasets[3].data[i] = Line_KKT[i]/60;
      }
      this.Line_chartData = Line_newChartData;

      // マシンアワー残り時間インジケーターの表示グラフのデータ
      let A_Data = this.$store.getters["timeBank/getmachineHourCutArry"](this.nameAB);
      let Max_Value = this.$store.getters["timeBank/getmachineHourArryTgt"](this.nameAB);
      let B_Data = Max_Value - A_Data;

      const Progress_newData = Object.assign({}, this.Progress_Data);
        Progress_newData.datasets[0].data[0] = A_Data;
        Progress_newData.datasets[0].data[1] = B_Data;

      const Progress_newOptions = Object.assign({}, this.Progress_options);

      Progress_newOptions.scales.xAxes[0].ticks.max = Max_Value;
      this.Progress_options.scales.xAxes[0].ticks.max = Max_Value; //にこれでレンダリング成功？21/4/16
      if(this.$store.getters["timeBank/getStatus"](this.nameAB)== 1){
        Progress_newData.datasets[0].backgroundColor[0]='limegreen';
      }else{
        Progress_newData.datasets[0].backgroundColor[0]='rgba(125,125,125,0.5)';
      }

      this.Progress_Data = Progress_newData;
      this.Progress_options = Progress_newOptions;

      console.log("マックスは、"+this.Progress_options.scales.xAxes[0].ticks.max);

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
};
</script>
