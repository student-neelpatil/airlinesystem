const {StatusCodes}=require('http-status-codes');

class ValidationError extends Error{
    constructor(error){
        super();
        let explanation=[];
        error.errors.forEach(err => {
            explanation.push(err.message);
            
        });
       this.name='ValidationError';
       this.message='Not able to validate data sent in the request';
       this.explaination=explaination;
       this.statusCodes=StatusCodes.BAD_REQUEST;
    }
}

modules.exports=ValidationError;