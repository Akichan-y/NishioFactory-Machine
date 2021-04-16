<script>
import { HorizontalBar , mixins} from 'vue-chartjs'
export default {
  extends: HorizontalBar,
  mixins: [mixins.reactiveData],
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