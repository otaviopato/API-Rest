import { IHttpStatus } from '@api-rest/contracts/IHttpStatus';

/**
 * @see https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
 */
export const HttpStatus: Record<string,IHttpStatus> = {
  continue: {
    code: 100,
    status: 'Continue'
  },
  switchingProtocol: {
    code: 101,
    status: 'Switching Protocol'
  },
  processing: {
    code: 102,
    status: 'Processing',
  },
  earlyHints: {
    code: 103,
    status: 'Early Hints',
  },
  ok: {
    code: 200,
    status: 'OK',
  },
  created: {
    code: 201,
    status: 'Created',
  },
  accepted: {
    code: 202,
    status: 'Accepted',
  },
  noContent: {
    code: 204,
    status: 'No Content',
  },
  badRequest: {
    code: 400,
    status: 'Bad Request',
  },
  unauthorized: {
    code: 401,
    status: 'Unauthorized',
  },
  forbidden: {
    code: 403,
    status: 'Forbidden',
  },
  notFound: {
    code: 404,
    status: 'Not Found',
  },
  conflict: {
    code: 409,
    status: 'Conflict',
  },
  unprocessableEntity: {
    code: 422,
    status: 'Unprocessable Entity'
  },
  internalServerError: {
    code: 500,
    status: 'Internal Server Error',
  }
};
