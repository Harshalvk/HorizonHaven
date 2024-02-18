class customError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (statusCode: number, message: string) => {
  return new customError(statusCode, message);
};
