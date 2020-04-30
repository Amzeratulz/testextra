import axios from 'axios'

class books {
  constructor () {
    this.axios = axios
  }

  async getAllBooks () {
    try {
      const data = await this.axios.get('books.json')
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async createBook (payload) {
    try {
      console.log('payload from table', payload)
      const data = await this.axios.post('books.json', payload)
      return data
    } catch (error) {
      console.log(error)
    }
  }
}
export default books
