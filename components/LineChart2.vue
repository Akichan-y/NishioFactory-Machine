<script>
// import { Line , mixins} from 'vue-chartjs'
import { HorizontalBar , mixins} from 'vue-chartjs'
// import { Radar , mixins} from 'vue-chartjs'
export default {
  // extends: Line,
  extends: HorizontalBar,
  // extends: Radar,
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

}
</script>