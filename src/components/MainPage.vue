<template>
    <div class="book" :class="{ favorite: book.favorite }">
      <div class="actions">
        <img :src="book.image" alt="Book image" class="book-image" />
        <h3 @click="showDetails = !showDetails">{{ book.title }}</h3>
        <div class="icons">
        <span @click="deleteBook" class="material-icons">delete</span>
        <router-link :to="{ name: 'EditBook', params: { id: book.id }}">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="toggleFavorite" class="material-icons grade">grade</span>
      </div>
      </div>
      <div v-if="showDetails" class="details">
        <p>{{ book.details }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['book'],
    data() {
      return {
        showDetails: false,
        uri: `http://localhost:3000/books/${this.book.id}`
      }
    },
    methods: {
    deleteBook() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.book.id))
        .catch(err => console.log(err))
      },
    toggleFavorite() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ favorite: !this.book.favorite })
      }).then(() => {
        this.$emit('favorite', this.book.id)
      }).catch(err => console.log(err))
      },
    }
  };
  </script>
  
<style scoped>
  .book {
    margin: 20px auto;
    background: rgb(255, 251, 210);
    padding: 20px 30px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 9px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .actions:hover {
    color: #04ca88;
  }
  .material-icons {
    font-size: 28px;
    margin-left: 10px;
    color: #a5a2a2;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #1b1b1b;
  }
  .book.favorite {
    border-left: 9px solid #04ca88;
  }
  .book.favorite .grade {
    color: #07c988;
  }
  .book-image {
  width: auto;
  height: 150px;
  margin-top: 10px;
  }
  </style>