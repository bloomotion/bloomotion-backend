const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const handleLogin = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    next(createError(404));

    return;
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      const newUser = {
        email,
      };

      user = await User.create(newUser);
    }

    const accessToken = jwt.sign(
      { email, id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" },
    );

    res.json({
      result: {
        id: user._id,
        email: user.email,
        accessToken: accessToken,
      },
    });
  } catch (err) {
    next(err);
  }
};

const verifyUser = async (req, res, next) => {
  const { id } = req;

  res.json({
    result: { id },
  });
};

module.exports = {
  handleLogin,
  verifyUser,
};
