const { GroupService  } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createGroup(req, res){
    try {
        const data = req.body;
        console.log('data : ',data);
        const response = await GroupService.createGroup(data);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log('group controller createGroup error : ',error);
        ErrorResponse.data = error;
        return res.status(error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
async function getGroup(req, res){
    try {
        const response = await GroupService.getGroup(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log('group controller getGroup error : ',error);
        ErrorResponse.data = error;
        return res.status(error?.statusCode ? error.statusCode :StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
module.exports = {
    createGroup,
    getGroup
}