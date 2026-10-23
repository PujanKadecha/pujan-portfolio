export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not Found: ${req.method} ${req.originalUrl}`,
  });
}

export function errorHandler(error, req, res, next) {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  return res.status(500).json({
    success: false,
    message: "An Unexpected Server Error",
  });
}
