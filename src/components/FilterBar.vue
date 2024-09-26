<template>
    <nav class="filter-bar">
      <button 
        @click="updateFilter('all')" 
        :class="{ active: current === 'all'}"
      >View all</button>
      <button 
        @click="updateFilter('favorite')"
        :class="{ active: current === 'favorite'}"
      >Favorite</button>
      <button 
        @click="updateFilter('non-favorite')"
        :class="{ active: current === 'non-favorite'}"
      >Non-Favorite</button>
    </nav>
  </template>
  
  <script>
  export default {
    props: ['current'],
    methods: {
      updateFilter(by) {
        this.$emit('filterChange', by)
      }
    }
  }
  </script>
  
  <style>
    .filter-bar button {
      background: none;
      border: none;
      color: #bbb;
      outline: none;
      font-size: 12px;
      text-transform: uppercase;
      margin-right: 10px;
      letter-spacing: 1px;
      font-weight: bold;
      cursor: pointer;
    }
    .filter-bar button.active {
      color: #555;
    }
  </style>