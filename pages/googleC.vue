<template>
  <div id='app'>
  <GChart
    :settings="{packages: ['timeline']}" 
    type="Timeline"   
    :data="chartData"
    :options="chartOptions"
   
    @ready="onChartReady"
  />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'App',
  components: {
    GChart
  },
  data () {
    return {
      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        [
          { type: 'string', id: 'Position' },
          { type: 'string', id: 'Name' },
          { type: 'date', id: 'Start' },
          { type: 'date', id: 'End' }
        ],
      [ 'President', 'STP', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'President', 'RUN', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
      [ 'President', 'ERR', new Date(1801, 2, 4), new Date(1805, 2, 4) ],
      [ 'President', 'DRR', new Date(1805, 2, 4), new Date(1809, 2, 4) ],

      ],
      colors2:['#808080', '#008000','#FF0000', '#FFFF00']
    }
  },
  computed: {
    chartOptions () {
      // if (!this.chartsLib) return null
      // return this.chartsLib.charts.Bar.convertOptions({
        return{
          // bars: 'horizontal', // Required for Material Bar Charts.
          // hAxis: { format: 'decimal' },
          // height: 400,
          // chart: {
          //   title: 'Company Performance',
          //   subtitle: 'Sales, Expenses, and Profit: 2014-2017'
          // },
          colors: this.colors2
        }
      // })
    }
  },
  methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    }
  }
}
</script>