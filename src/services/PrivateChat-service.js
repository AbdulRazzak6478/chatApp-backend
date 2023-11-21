const { ChatRepository, UserRepository, GroupRepository, PrivateChatRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const chatRepository = new ChatRepository();
const userRepository = new UserRepository();
const groupRepository = new GroupRepository();
const privateChatRepository = new PrivateChatRepository();

async function createPrivateChat(data)
{
    try {
       const chat = await privateChatRepository.create(data);
       console.log('chat data : ',chat);
       return chat
    } catch (error) {
        console.log('privateChat service create chat error :',error);
        throw new AppError(`not able to create a message or chat  , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createPrivateChat
}
