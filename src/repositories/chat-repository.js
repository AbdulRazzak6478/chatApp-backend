const { Chat } = require("../models");
const CrudRepository = require("./crud-repository");

class ChatRepository extends CrudRepository{
    constructor()
    {
        super(Chat);
    }
    async getChatByName(name)
    {
        const chat = await Chat.find({
            userName:name,
        });
        return chat;
    }
}

module.exports = ChatRepository;