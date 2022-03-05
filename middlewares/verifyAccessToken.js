const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const verifyAccessToken = (req, res, next) => {
  const { accesstoken } = req.headers;

  jwt.verify(
    accesstoken,
    process.env.ACCESS_TOKEN_SECRET,
    async (error, decoded) => {
      if (error) {
        return next(createError(403, "Forbidden"));
      }

      req.id = decoded.id;
      next();
    },
  );
};

module.exports = verifyAccessToken;
