<template>
  <div class="home">
    <div v-if="books.length">
      <div v-for="book in books" :key="book.id">
        <MainPage :book="book" @delete="handleDelete" @favorite="handleFavorite" />
      </div>
    </div>
  </div>
</template>

<script>
import MainPage from '../components/MainPage.vue'

export default {
  name: 'Home',
  components: { MainPage },
  data() {
    return {
      books: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data => this.books = data)
      .catch(err => console.log(err))
  },
  methods: {
    handleDelete(id) {
      this.books = this.books.filter((book) => {
        return book.id !== id
      })
    },
    handleFavorite(id) {
      let p = this.books.find(book => {
        return book.id === id
      })
      p.favorite = !p.favorite
      // console.log(p)
    }
  }
}
</script>
