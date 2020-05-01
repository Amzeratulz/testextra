import BookProvider from '../services/book'
const bookProvider = new BookProvider()

const state = {
  books: []
}

const actions = {
  async getAllBooks ({ commit }) {
    const data = await bookProvider.getAllBooks()
    commit('GET_ALL_BOOKS', data)
  },
  async createBook ({ commit }, payload) {
    console.log('payload actions', payload)
    await bookProvider.createBook(payload)
    commit('CREATE_BOOK', payload)
  },
  async deleteBook ({ commit }, payload) {
    await bookProvider.deleteBook(payload)
    commit('DELETE_BOOK', payload)
  }
}

const mutations = {
  GET_ALL_BOOKS (state, payload) {
    console.log('GET_ALL_BOOKS', payload)
    state.books = []
    for (const key in payload.data) {
      state.books.push({
        id: key,
        name: payload.data[key].name,
        amount: payload.data[key].amount,
        category: payload.data[key].category,
        status: payload.data[key].status
      })
    }
  },
  CREATE_BOOK (state, payload) {
    state.books.push(payload)
  },
  DELETE_BOOK (state, payload) {
    console.log('payload index', payload)
    const indexedBook = state.books.findIndex(value => {
      return value.id === payload
    })
    state.books.splice(indexedBook, 1)
    console.log('indexedBook', indexedBook)
  }
}

const getters = {
  getAllBooks: state => {
    return state.books
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
