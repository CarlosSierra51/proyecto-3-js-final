<template>
  <div>
    <h2>Lista de Contactos</h2>
    <ListContact :contacts="contacts" />
  </div>
</template>

<script>
import ListContact from '../Ui/ListContact.vue';

export default {
  props: ['contacts'],
  components: {
    ListContact
  }
};
</script>

  
  <style scoped>
  div {
    margin-bottom: 10px;
  }
  </style>
  