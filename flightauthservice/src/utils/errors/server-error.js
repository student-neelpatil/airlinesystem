const {StatusCodes}=require('http-status-codes');


class ServiceError extends Error{
    constructor(
        message,
        explaination,
        statusCodes=StatusCodes.INTERAL_SERVER_ERROR
    ){
       this.name='ServiceError';
       this.message=message;
       this.explaination=explaination;
       this.statusCodes=statusCodes;
    }
}

modules.exports=ServiceError;