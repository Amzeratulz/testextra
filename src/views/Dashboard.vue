<template>
  <v-img :src="require('../assets/wallpaper.jpg')">
    <Header></Header>
    <v-container>
      <v-row>
        <v-col lg="8" cols="12">
          <BooksTable></BooksTable>
        </v-col>
        <v-col lg="4" cols="12">
          <CardNumber></CardNumber>
          <br>
          <pie-chart></pie-chart>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import BooksTable from '@/components/BooksTable.vue'
import Header from '@/components/Header.vue'
import CardNumber from '@/components/CardNumber.vue'
import PieChart from '@/components/PieChart.vue'
export default {
  components: {
    BooksTable,
    PieChart,
    CardNumber,
    Header
  }
}
</script>

<style scoped>
#dashboard {
  background-color: 'yellow';
}
</style>
