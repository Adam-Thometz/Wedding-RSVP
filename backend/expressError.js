class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  };
};

class NotFoundError extends ExpressError {
  constructor(message = 'Not found') {
    super(message, 404);
  };
};

module.exports = {
  ExpressError,
  NotFoundError
};