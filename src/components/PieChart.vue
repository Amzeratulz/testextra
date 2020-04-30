<template>
  <div>
    <pie-chart v-if="show" class="mb-5"  color="gold" :height='250' :chart-data='datacollection' :options='options'></pie-chart>
    <span class="title font-weight-bold">Categories in store</span>
  </div>
</template>
<script>

// const getOccurrence = (array, value) => {
//   var count = 0;
//   array.forEach((v) => (v === value && count++));
//   return count;
// }

import { mapGetters, mapActions } from 'vuex'
import PieChart from '@/PieChart.js'
export default {
  computed: {
    ...mapGetters({
      books: 'getAllBooks'
    })
  },
  methods: {
    ...mapActions({
      getAllBooks: 'getAllBooks'
    }),
    calPie () {
      this.datacollection.labels = Array.from(new Set(this.books.map((value, index) => {
        return value.category
      })))
      const dataValue = []
      for (let index = 0; index < this.datacollection.labels.length; index++) {
        const lengthCategory = this.books.filter(value => {
          return value.category === this.datacollection.labels[index]
        }).length
        dataValue.push(lengthCategory)
      }
      this.datacollection.datasets[0].data = dataValue
      this.datacollection.datasets[0].backgroundColor = ['#FF6384', '#36A2EB', '#FFCE56']
      this.show = true
    }
  },
  updated () {
    console.log('asdasdasdadasdasdasdad')
  },
  async created () {
    await this.getAllBooks()
    this.calPie()
  },
  data () {
    return {
      show: false,
      datacollection: {
        datasets: [{
          data: []
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: []
      },
      options: {
      }
    }
  },
  components: {
    PieChart
  }
}
</script>
