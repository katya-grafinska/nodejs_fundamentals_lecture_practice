var util = require('util');

function HttpError(status, code, message) {
    this.status = status;
    this.message = message;
    this.code = getCodeInfo(code);
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function main(a) {
    try {
        if (a === 1) throw new HttpError(500, 'ACHTUNG!');
        if (a === 2) throw new Error(500, 'ACHTUNG!');
    } catch(e) {
        if (e instanceof HttpError) console.log('http')
        else console.log('just another error');
        // if (e instanceof Error) console.log('just another error');
        // console.error(e);
    }
}

main(1);
// main(2);
