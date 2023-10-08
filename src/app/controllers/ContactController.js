const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    //obter um registro
  }

  store() {
    //criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar registro
  }
}

// Singleton
module.exports = new ContactController();
