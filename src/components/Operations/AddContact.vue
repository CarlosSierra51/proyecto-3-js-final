<template>
  <div>
    <h2>Añadir Contacto</h2>
    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="apellido" placeholder="Apellido" />
    <input v-model="telefono" placeholder="Teléfono" />
    <input v-model="email" placeholder="Email" />
    <CardButton @click="addContact">Añadir</CardButton>
  </div>
</template>

<script>
import { Contacto } from '../Classes/clases';
import CardButton from '../Ui/CardButton.vue';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      telefono: '',
      email: ''
    };
  },
  components: {
    CardButton
  },
  methods: {
    addContact() {
      const newContact = new Contacto(this.nombre, this.apellido, this.telefono, this.email);
      this.$emit('add-contact', newContact);
      this.resetForm();
    },
    resetForm() {
      this.nombre = '';
      this.apellido = '';
      this.telefono = '';
      this.email = '';
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
  
  