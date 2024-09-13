export default {
    contacts: [],
  
    getContacts() {
      return this.contacts;
    },
  
    addContact(contact) {
      this.contacts.push(contact);
    },
  
    updateContact(updatedContact) {
      const index = this.contacts.findIndex(c => c.id === updatedContact.id);
      if (index !== -1) {
        this.contacts[index] = updatedContact;
      }
    },
  
    deleteContact(id) {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    }
  };
  