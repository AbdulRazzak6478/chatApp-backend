const { UserRepository } = require('../repositories');
const { User } = require('../models')
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const { ServerConfig } = require('../config');
const userRepository = new UserRepository();


async function signup(data)
{
    try {
        const user = await userRepository.create(data);
        console.log('user created :',user);
        return user;
    } catch (error) {
        console.log('user service signup user error :',error);
        throw new AppError(`Cannot SignUp the user , ${error?.message}`,error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports = {
    signup,
}