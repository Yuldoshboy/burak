export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROD = 500,
}

export enum Messages {
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = 'No data is found!',
    CREATE_FAILED = "Create is failed!",
    UPDATE_FAILED = "Update is failed!",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Messages;

    constructor(statusCode: HttpCode, statusMessage: Messages) {
        super();
        this.code = statusCode,
        this.message = statusMessage,
    }
}

export default Errors;