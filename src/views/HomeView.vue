<template>
  <div class="home">
    <FilterBar :current="current" @filterChange="current = $event" />
    <div v-if="books.length" class="book-grid">
      <div v-for="book in filteredBooks" :key="book.id">
        <MainPage :book="book" @delete="handleDelete" @favorite="handleFavorite" />
      </div>
    </div>
  </div>
</template>

<script>
import FilterBar from '../components/FilterBar.vue';
import MainPage from '../components/MainPage.vue'

export default {
  name: 'Home',
  components: { MainPage, FilterBar },
  data() {
    return {
      books: [],
      current: 'all',
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
  },
  computed: {
    filteredBooks() {
      if (this.current === 'favorite') {
        return this.books.filter(book => book.favorite)
      }
      if (this.current === 'non-favorite') {
        return this.books.filter(book => !book.favorite)
      }
      return this.books
    }
  },
}
</script>

<style scoped>
.book-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

</style>