const { GroupRepository, UserRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const { ServerConfig } = require('../config');
const { Auth } = require('../utils/common');
const groupRepository = new GroupRepository();
const userRepository = new UserRepository();


async function createGroup (data){
    try {
        const user = await userRepository.get(data.userId);
        data.isPersonal = data.isPersonal == 1 ? true : false;
        data.admins = data.userId;
        data.users = data.userId;
        console.log('user details : ',user);
        console.log('data payload : ',data);
        const group = await groupRepository.create(data);
        console.log('group details : ',group);
        return group;
    } catch (error) {
        console.log('group service create group error :',error);
        throw new AppError(`not able to create a group , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function getGroup(id){
    try {
        const group = await groupRepository.get(id);
        console.log('group details : ',group);
        return group;
    } catch (error) {
        console.log('group service get group error :',error);
        throw new AppError(`not able to get a group details , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function deleteGroup(id){
    try {
        const group = await groupRepository.delete(id);
        console.log('group details : ',group);
        return group;
    } catch (error) {
        console.log('group service delete group error :',error);
        throw new AppError(`not able to get a group details , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createGroup,
    getGroup,
    deleteGroup
}