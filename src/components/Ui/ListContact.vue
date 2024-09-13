<template>
    <div class="list-contact">
      <h2>Lista de Contactos</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts" :key="contact.id" @click="selectContact(contact)" :class="{ selected: contact === selectedContact }">
              <td>{{ contact.nombre }}</td>
              <td>{{ contact.apellido || 'N/A' }}</td>
              <td>{{ contact.telefono }}</td>
              <td>{{ contact.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="buttons">
        <button @click="openAddModal" class="btn add-btn">Añadir</button>
        <button @click="deleteContact" class="btn delete-btn" :disabled="!selectedContact">Eliminar</button>
        <button @click="openEditModal" class="btn edit-btn" :disabled="!selectedContact">Modificar</button>
      </div>
      
      <!-- Modal para añadir contacto -->
      <div v-if="showAddModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeAddModal">&times;</span>
          <h3>Añadir Contacto</h3>
          <input v-model="newContact.nombre" placeholder="Nombre" />
          <input v-model="newContact.apellido" placeholder="Apellido (opcional)" />
          <input v-model.number="newContact.telefono" placeholder="Teléfono" type="tel" @input="validatePhone" />
          <input v-model="newContact.email" placeholder="Email (debe ser @gmail.com)" @input="validateEmail" />
          <button @click="addContact" class="btn add-btn">Añadir Contacto</button>
          <p v-if="errors.length" class="error">{{ errors.join(', ') }}</p>
        </div>
      </div>
      
      <!-- Modal para editar contacto -->
      <div v-if="showEditModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeEditModal">&times;</span>
          <h3>Editar Contacto</h3>
          <input v-model="editingContact.nombre" placeholder="Nombre" />
          <input v-model="editingContact.apellido" placeholder="Apellido (opcional)" />
          <input v-model.number="editingContact.telefono" placeholder="Teléfono" type="tel" @input="validatePhone" />
          <input v-model="editingContact.email" placeholder="Email (debe ser @gmail.com)" @input="validateEmail" />
          <button @click="updateContact" class="btn edit-btn">Guardar Cambios</button>
          <p v-if="errors.length" class="error">{{ errors.join(', ') }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ContactService from '../Operations/ContactService';
  
  export default {
    name: 'ListContact',
    data() {
      return {
        newContact: {
          nombre: '',
          apellido: '',
          telefono: '',
          email: ''
        },
        contacts: ContactService.getContacts(),
        selectedContact: null,
        editingContact: null,
        showAddModal: false,
        showEditModal: false,
        errors: []
      };
    },
    methods: {
      openAddModal() {
        this.showAddModal = true;
      },
      closeAddModal() {
        this.showAddModal = false;
        this.errors = [];
      },
      addContact() {
        this.errors = [];
        if (!this.newContact.nombre || !this.newContact.telefono || !this.newContact.email) {
          this.errors.push('Por favor, complete todos los campos obligatorios.');
        }
        if (!/^\d+$/.test(this.newContact.telefono)) {
          this.errors.push('El teléfono solo puede contener números.');
        }
        if (!this.newContact.email.endsWith('@gmail.com')) {
          this.errors.push('El email debe tener la extensión @gmail.com.');
        }
        if (this.errors.length > 0) {
          return;
        }
        const newContact = {
          ...this.newContact,
          id: Date.now() // Usamos un timestamp como ID único
        };
        ContactService.addContact(newContact);
        this.contacts = ContactService.getContacts(); // Actualiza la lista de contactos
        this.newContact = { nombre: '', apellido: '', telefono: '', email: '' }; // Resetea el formulario
        this.closeAddModal();
      },
      openEditModal() {
        if (this.selectedContact) {
          this.editingContact = { ...this.selectedContact };
          this.showEditModal = true;
        }
      },
      closeEditModal() {
        this.showEditModal = false;
        this.errors = [];
      },
      updateContact() {
        this.errors = [];
        if (!this.editingContact.nombre || !this.editingContact.telefono || !this.editingContact.email) {
          this.errors.push('Por favor, complete todos los campos obligatorios.');
        }
        if (!/^\d+$/.test(this.editingContact.telefono)) {
          this.errors.push('El teléfono solo puede contener números.');
        }
        if (!this.editingContact.email.endsWith('@gmail.com')) {
          this.errors.push('El email debe tener la extensión @gmail.com.');
        }
        if (this.errors.length > 0) {
          return;
        }
        ContactService.updateContact(this.editingContact);
        this.contacts = ContactService.getContacts(); // Actualiza la lista de contactos
        this.editingContact = null;
        this.closeEditModal();
      },
      deleteContact() {
        if (this.selectedContact) {
          ContactService.deleteContact(this.selectedContact.id);
          this.contacts = ContactService.getContacts(); // Actualiza la lista de contactos
          this.selectedContact = null;
        }
      },
      selectContact(contact) {
        this.selectedContact = contact;
      },
      validatePhone(event) {
        const value = event.target.value;
        event.target.value = value.replace(/[^0-9]/g, ''); // Permite solo números
        this.newContact.telefono = event.target.value; // Actualiza el modelo
      },
      validateEmail(event) {
        const value = event.target.value;
        this.newContact.email = value;
      }
    }
  };
  </script>
  
  <style src="../../assets/styles/listContact.css"></style>
  