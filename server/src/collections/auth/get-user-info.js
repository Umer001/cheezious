const { AuthServices } = require("../../services");
module.exports = (req, res) => {
  return AuthServices.getUserInfo(req, res);
};
