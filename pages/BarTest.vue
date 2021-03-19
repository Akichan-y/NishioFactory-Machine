<template>
  <div>
    <h1>vue-chartjsで棒グラフ</h1>
    <BarChart :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue'

export default {
  components: {
    BarChart
  },
  data(){
    return {
        chartdata: {
            // labels: ['運転', '異常','停止'],
            datasets: [
                {
                label: ['Data One'],
                backgroundColor: ['#99FF66','#FF3333','#AAAAAA'],
                  data: [10, 10,10],
                  // borderColor:'transparent' データ間の隙間をなくす

                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // legend: {
              // position: 'top',
              // ★ [labels]を追加
              // labels : {
              //           fontSize: 12,
              //           }
          // }
            
        }
    }
  },
}
</script>