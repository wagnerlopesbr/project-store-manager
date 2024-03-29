const http = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INVALID_ARGUMENT: 422,
  INTERNAL_SERVER_ERROR: 500,
};

const HTTPStatus = (statusCode) => http[statusCode];

module.exports = {
  HTTPStatus,
  http,
};