const { PrivateChatService  } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createPrivateChat(req, res){
    try {
        req.body.users = req.body.users.split(',');
        req.body.messages =['655bac9eef576ec736d93b53', '655bab2608669d7185b603e4']
        console.log("data payload : ",req.body);
        const response = await PrivateChatService.createPrivateChat(req.body);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log('privateChat controller getGroups error : ',error);
        ErrorResponse.data = error;
        return res.status(error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function getPrivateChats(req, res){
    try {
        const response = await PrivateChatService.getPrivateChats();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log('group controller getGroups error : ',error);
        ErrorResponse.data = error;
        return res.status(error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
module.exports = { 
    createPrivateChat,
    getPrivateChats
}