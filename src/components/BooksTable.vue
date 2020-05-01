<template>
  <v-data-table
    :headers="headers"
    :items="books"
    :loading="loading"
    loading-text="Loading... Please wait"
    class="elevation-3 blue lighten-5"
  >
    <template v-slot:top>
      <v-toolbar flat color="light-blue darken-1">
        <v-icon large color='#ffffff' class='mr-2 ml-2'>mdi-book</v-icon>
        <v-toolbar-title class="headline font-weight-bold" style="color: white">Book Store</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on"><span class="body-2 font-weight-bold">New Book</span></v-btn>
          </template>
          <v-card class="blue lighten-5">
            <v-card-text style="padding-bottom:0">
              <v-container>
                <v-card-title class="px-0">Add Book</v-card-title>
                <v-form
                  v-model="valid"
                  ref="form">
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field :rules="nameRules" outlined v-model="addItem.name" label="Book name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field :rules="amountRules" outlined type="number" v-model="addItem.amount" label="Amount"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select :rules="statusRules" :items="statusOp" outlined v-model="addItem.status" label="Status">
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select :rules="categoryRules" :items="categoryOp" outlined v-model="addItem.category" label="Category"></v-select>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:item.no="{item}">
      {{books.map(function(x) {return x.id; }).indexOf(item.id) + 1}}
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    nameRules: [
      v => !!v || 'Name is required'
    ],
    statusRules: [
      v => !!v || 'Status is required'
    ],
    amountRules: [
      v => !!v || 'Amount is required',
      v => (v && v >= 0) || 'Amount must equal or more than 0'
    ],
    categoryRules: [
      v => !!v || 'Category is required'
    ],
    valid: true,
    dialog: false,
    loading: false,
    headers: [
      { text: 'No', align: 'center', value: 'no' },
      { text: 'Name', align: 'center', value: 'name' },
      { text: 'Amount', align: 'center', value: 'amount' },
      { text: 'Category', align: 'center', value: 'category' },
      { text: 'Status', align: 'center', value: 'status' },
      { text: 'Actions', align: 'center', value: 'actions', sortable: false }
    ],
    statusOp: ['Active', 'Inactive'],
    categoryOp: ['Fiction', 'Sci-Fi', 'Cartoon'],
    addItem: {
      name: '',
      status: '',
      category: '',
      amount: 0
    }
  }),

  computed: {
    ...mapGetters({
      books: 'getAllBooks'
    })
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  async created () {
    this.loading = true
    await this.getAllBooks()
    console.log('book', this.books)
    this.loading = false
  },

  methods: {
    ...mapActions({
      getAllBooks: 'getAllBooks',
      createBook: 'createBook',
      deleteBook: 'deleteBook'
    }),
    async onAddBook () {
      try {
        const payload = {
          name: this.addItem.name,
          amount: this.addItem.amount,
          category: this.addItem.category,
          status: this.addItem.status
        }
        console.log('payload', payload)
        await this.createBook(payload)
        this.addItem = {
          name: '',
          status: '',
          category: '',
          amount: 0
        }
      } catch (error) {
        console.log(error)
      }
    },
    resetValidation () {
      this.$refs.form.reset()
    },
    async deleteItem (item) {
      console.log(item)
      if (confirm('Are you sure you want to delete this item?')) {
        await this.deleteBook(item.id)
      }
    },

    close () {
      this.dialog = false
      this.resetValidation()
    },

    save () {
      console.log(this.addItem)
      if (this.$refs.form.validate()) {
        this.onAddBook(this.addItem)
        this.close()
        this.resetValidation()
      }
    }
  }
}
</script>
