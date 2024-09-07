<template>
    <div class="base-card">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseCard'
  };
  </script>
  
  <style scoped>
  .base-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  