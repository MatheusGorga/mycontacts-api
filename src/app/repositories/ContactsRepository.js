const { v4 } = require("uuid");
const contacts = [
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
}

module.exports = new ContactsRepository();
