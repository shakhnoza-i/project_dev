<template>
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input type="text" v-model="title" required>
      <label>Details</label>
      <textarea v-model="details" required></textarea>
      <label>Image URL</label>
      <input type="text" v-model="image" placeholder="Enter image URL" required>
      <button>Add Book</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        details: '',
        image: ''
      }
    },
    methods: {
    handleSubmit() {
      let book = {
        title: this.title,
        details: this.details,
        image: this.image,
        favorite: false
      }
      console.log(book)
  
     fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
      }).then(() => {
        this.$router.push('/')
      }).catch(err => console.log(err))
    }
  }
  }
  </script>
  
  <style>
    form {
      background: white;
      padding: 20px;
      border-radius: 10px;
    }
    label {
      display: block;
      color: #585858;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      margin: 20px 0 10px 0
    }
    input {
      padding: 10px;
      border: 0;
      border-bottom: 1px solid #ddd;
      width: 100%;
      box-sizing: border-box;
    }
    textarea {
      border: 1px solid #ddd;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      height: 150px;
    }
    form button {
      display: block;
      margin: 20px auto 0;
      background: #00ce89;
      color: white;
      padding: 10px;
      border: 0;
      border-radius: 6px;
      font-size: 16px;
    }
  </style>