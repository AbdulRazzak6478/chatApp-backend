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
async function getPrivateChats(){
    try {
        const privateChats = await privateChatRepository.getAll();
        console.log('privateChats details : ',privateChats);
        return privateChats;
    } catch (error) {
        console.log('privateChats service get chat error :',error);
        throw new AppError(`not able to get a privateChats details , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
// async function getPrivateChat(id){
//     try {
//         const privateChat = await privateChatRepository.get(id);
//         console.log('privateChats details : ',privateChat);
//         return privateChat;
//     } catch (error) {
//         console.log('privateChats service get chat error :',error);
//         throw new AppError(`not able to get a privateChats details , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
//     }
// }

// async function deletePrivateChat(id){
//     try {
//         const privateChat = await privateChatRepository.delete(id);
//         console.log('group details : ',privateChat);
//         return privateChat;
//     } catch (error) {
//         console.log('group service delete group error :',error);
//         throw new AppError(`not able to get a group details , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
//     }
// }

module.exports = {
    createPrivateChat,
    getPrivateChats,
}
