<template>
    <div>
        <button type='button' v-on:click='add'>{{btnName}}</button>
        <line-chart
            :data="chartData"
            :options="options"
            :height="100"
        ></line-chart>
    </div>
</template>

<script>
import LineChart from "~/components/LineChartSample.vue";
export default {
  name: "ChartLineSample",
  components: {
    LineChart
  },
  data: function() {
    return {
      counter: 0,
      btnName: '追加',
      chartData: {
        labels: [],
        // データ詳細
        datasets: [
          {
            label: "データ",
            data: []
          }
        ]
      },
      options: {responsive: true
                      , maintainAspectRatio: true
                      , animation: false},
      addFlag: false
    };
  },
  methods: {
    add: function() {
      this.addFlag = !this.addFlag;
      if (this.addFlag) {
        this.addData();
        this.btnName = '停止'
      } else {
        this.btnName = '追加'
      }
    },
    addData: function() {
      const newChartData = Object.assign({}, this.chartData) //オブジェクト形式の配列を、既存の連想配列からセット
      this.counter++;
      newChartData.labels.push(this.counter);
      let value = Math.floor(Math.random() * Math.floor(100));
      newChartData.datasets[0].data.push(value);
      this.chartData = newChartData
      setTimeout(() => {
        if (this.addFlag) {
          this.addData();
        }
      }, 1000);
    }
  },
  created: function() {
    this.addData();
  }
};
</script>

<style>
</style>