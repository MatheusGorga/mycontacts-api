const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    //obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      //404 = not found
      return response.status(404).json({ error: "User not found" });
    }
    response.json(contact);
  }

  store() {
    //criar um registro
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      //404 = not found
      return response.status(404).json({ error: "User not found" });
    }
    await ContactsRepository.delete(id);
    //No content
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
