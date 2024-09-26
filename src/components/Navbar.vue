<template>
    <nav class="main-nav">
      <router-link :to="{ name: 'HomeView' }">Books</router-link>
      <router-link :to="{ name: 'AddBook' }">Add a New Book</router-link>
    </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
    .main-nav {
      text-align: center;
      margin: 40px auto;
    }
    .main-nav a{
      display: inline-block;
      text-decoration: none;
      margin: 0 10px;
      color: #ffffff;
      font-size: 20px;
    }
    a.router-link-active {
      border-bottom: 3px solid #00ce89;
      padding-bottom: 4px;
    }
  </style>