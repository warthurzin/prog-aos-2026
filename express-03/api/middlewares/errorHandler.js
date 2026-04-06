const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.name === "SequelizeValidationError") {
    return res.status(400).json({
      status: 400,
      error: "Bad Request",
      message: error.errors.map((e) => e.message),
    });
  }

  if (error.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({
      status: 409,
      error: "Conflict",
      message: error.errors.map((e) => e.message),
    });
  }

  return res.status(500).json({
    status: 500,
    error: "Internal Server Error",
    message: error.message,
  });
};

export default errorHandler;
