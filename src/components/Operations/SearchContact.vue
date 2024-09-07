<template>
  <div>
    <h2>Buscar Contacto</h2>
    <input v-model="searchTerm" placeholder="Buscar por nombre" />
    <button @click="search">Buscar</button>
    <ListContact :contacts="filteredContacts" />
  </div>
</template>

<script>
import ListContact from '../Ui/ListContact.vue';

export default {
  props: ['contacts'],
  data() {
    return {
      searchTerm: ''
    };
  },
  components: {
    ListContact
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(contact =>
        contact.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
  methods: {
    search() {
      this.$emit('search-contact', this.searchTerm);
    }
  }
};
</script>
  
  <style scoped>
  input {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
  </style>
  