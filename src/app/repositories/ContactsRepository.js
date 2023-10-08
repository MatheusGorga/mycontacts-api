const { uuid } = require("uuidv4");
const contacts = [
  {
    id: uuid(),
    name: "Matheus",
    email: "Matheus@gmail.com",
    phone: "1231321231",
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
