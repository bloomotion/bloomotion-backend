const User = require("../models/User");

const getEmotion = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.json({
      result: user.emotion,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const setNewEmotion = async (req, res, next) => {
  const { id } = req.params;
  const { emotion, confidence, flower } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, {
      $set: { emotion: emotion, confidence: confidence, flower: flower },
    });

    if (!user) {
      throw new Error();
    }

    res.json({
      result: "ok",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getEmotion,
  setNewEmotion,
};
