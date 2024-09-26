<template>
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input type="text" v-model="title" required>
      <label>Details</label>
      <textarea v-model="details" required></textarea>
      <label>Image URL</label>
      <input type="text" v-model="image" placeholder="Enter image URL" required>
      <button>Update Book</button>
    </form>
</template>
  
  <script>
export default {
    props: ['id'],
    data() {
      return {
        uri: `http://localhost:3000/books/${this.id}`,
        title: '',
        details: '',
        image: ''
      }
    },
    mounted() {
      fetch(this.uri)
        .then(res => res.json())
        .then(data => {
          this.title = data.title
          this.details = data.details
          this.image = data.image
        }).catch(err => console.log(err))
    },
    methods: {
        handleSubmit() {
        fetch(this.uri, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: this.title, details: this.details, image: this.image })
        }).then(() => {
            this.$router.push('/')
        }).catch(err => console.log(err))
      }
    }
}
  </script>
  
  <style>
  
  </style>