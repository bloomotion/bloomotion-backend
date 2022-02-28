const User = require("../models/User");

const getNewEmotion = async (req, res, next) => {
  const { id } = req.params;
  const { emotion, confidence, flower } = req.body;

  try {
    await User.findByIdAndUpdate(id, {
      $set: { emotion: emotion, confidence: confidence, flower: flower },
    });

    res.json({
      result: "ok",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  getNewEmotion,
};
