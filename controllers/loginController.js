const jwt = require("jsonwebtoken");
const User = require("../models/User");

const handleLogin = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      const newUser = {
        name,
        email,
      };

      user = await User.create(newUser);
    }

    const accessToken = jwt.sign(
      { name, email, id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" },
    );

    res.json({
      result: {
        id: user._id,
        name: user.name,
        email: user.email,
        accessToken: accessToken,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
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
