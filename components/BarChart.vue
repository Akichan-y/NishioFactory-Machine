<script>
// import { Line , mixins} from 'vue-chartjs'
import { Doughnut , mixins} from 'vue-chartjs'
// import { Bar , mixins} from 'vue-chartjs'
export default {
  // extends: Line,
  extends: Doughnut,
  // extends: Bar,
  mixins: [mixins.reactiveData],
  // props:['chartdata', 'options'],
  props: {
    data: null,
    options: null
  },
  mounted () {
    this.chartData = this.data
  },
  watch: {
      data: function() {
        this.chartData = this.data
      }
    }
  // mounted () {
  //   this.renderChart(this.chartdata, this.options)
  // },
  //=============================
  //   props: {
  //   data: null,
  //   options: null
  // },
  // mounted () {
  //   this.chartData = this.data
  // },
      // watch: {
      //     data: function() {
      //       // this.chartData = this.data
      //       this.chartData = this.data
      //     }
      //   }
  //=============================

}
</script>