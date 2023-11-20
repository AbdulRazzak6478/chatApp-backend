const { Chat } = require("../models");
const CrudRepository = require("./crud-repository");

class ChatRepository extends CrudRepository{
    constructor()
    {
        super(Chat);
    }
    async getChatByGroupId(groupId)
    {
        const chats = await Chat.find({
            groupId:groupId,
        });
        return chats;
    }
}

module.exports = ChatRepository;