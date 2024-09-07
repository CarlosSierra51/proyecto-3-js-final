<template>
    <button class="card-button">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'CardButton'
  };
  </script>
  
  <style scoped>
  .card-button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>
  