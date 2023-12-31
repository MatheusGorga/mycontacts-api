const { v4 } = require("uuid");
let contacts = [
  {
    id: v4(),
    name: "Matheus",
    email: "Matheus@gmail.com",
    phone: "1231321231",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "jose",
    email: "jose@gmail.com",
    phone: "1231321121",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = { id: v4(), name, email, phone, category_id };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updateContact = { id, name, email, phone, category_id };

      contacts = contacts.map((contact) =>
        contact.id === id ? updateContact : contact
      );
      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
