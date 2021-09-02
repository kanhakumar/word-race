const _ = require("lodash");
const { SavedGames } = require("../../models/SavedGames");
const { User } = require("../../models/User");

module.exports = {
  savedGames: async (req, res) => {
    try {
      const savedGames = await SavedGames.find().sort("user_id");
      if (savedGames.length !== 0) {
        return res.send({ success: true, savedGames });
      } else {
        return res.send({
          success: false,
          message: "No games to show, save one first",
        });
      }
    } catch (e) {
      res.send({ success: false, message: e });
    }
  },
  saveGame: async (req, res) => {
    try {
      var body = _.pick(req.body, ["user_id", "score", "level", "multiplier"]);
      var user = await User.findById(body.user_id);
      if (!user) {
        throw "Wrong UserId! User doesn't exist";
      }
      var game = new SavedGames(body);
      var savedGame = await game.save();
      res.send({ success: true, savedGame });
    } catch (e) {
      res.send({ success: false, message: e });
    }
  },
};
