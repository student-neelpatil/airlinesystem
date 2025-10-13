const appError = require('./generic-error');
const validationError=require('./validation-error');
const serviceError=require('./service-error')


module.exports={
    ValidationError:validationError,
    AppError:appError,
    ServiceError:serviceError
}