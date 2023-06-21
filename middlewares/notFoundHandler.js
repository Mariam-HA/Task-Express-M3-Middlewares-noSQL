const notFoundMiddleware = (req, res, next) => {
  return res.status(404).json({ massage: "Page Not Found" });
};

module.exports = notFoundMiddleware;
