<script>
// import { Line , mixins} from 'vue-chartjs'
// import { Line , mixins} from 'vue-chartjs'
import { HorizontalBar , mixins} from 'vue-chartjs'
export default {
  // extends: Line,
  // extends: Line,
  extends: HorizontalBar,
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