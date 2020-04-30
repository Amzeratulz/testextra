<template>
  <v-card class="mx-auto" id="showcard" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="100" color="#53c68c">
        <v-icon large color="#ffffff" class="mr-2 ml-2">mdi-book-open-page-variant</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 font-weight-bold" style="color: white">Total Books</v-list-item-title>
        <v-list-item-title class="subtitle-2 mb-1" style="color: white">Active {{activeBook}} of {{books.length}}</v-list-item-title>
        <v-progress-linear color="white" :value="activeBook / books.length * 100"></v-progress-linear>
        <v-list-item-subtitle style="color: white !important">Total: {{books.length}} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      books: 'getAllBooks'
    }),
    activeBook () {
      return this.books.filter(value => {
        return value.status === 'Active'
      }).length
    }
  }
}
</script>

<style scoped>
#showcard {
  background-color: rgb(63, 150, 83);
}
</style>
