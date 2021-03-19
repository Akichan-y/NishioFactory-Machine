<script>
// import { Line , mixins} from 'vue-chartjs'
// import { Line , mixins} from 'vue-chartjs'
import { HorizontalBar , mixins} from 'vue-chartjs'
// import { Bar , mixins} from 'vue-chartjs'
export default {
  // extends: Line,
  // extends: Line,
  extends: HorizontalBar,
  // extends: Bar,
  mixins: [mixins.reactiveData],
  // props:['Line_chartdata', 'Line_options'],
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

}
</script>