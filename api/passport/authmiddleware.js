const accountTypeEnum = require("../database/models/user.js").accountTypeEnum;
const authValidators = require("./authvalidators.js");

const requireChairStatus = (req, res, next) => {
  if (
    authValidators.validateRequestForRole(req, accountTypeEnum.CHAIR) ||
    authValidators.validateRequestForRole(req, accountTypeEnum.BOARD) ||
    authValidators.validateRequestForRole(req, accountTypeEnum.ADMIN)
  ) {
    return next();
  }
  res.status(401).send("You are not authorized (requires chair status).");
};

const requireBoardStatus = (req, res, next) => {
  if (
    authValidators.validateRequestForRole(req, accountTypeEnum.BOARD) ||
    authValidators.validateRequestForRole(req, accountTypeEnum.ADMIN)
  ) {
    return next();
  }
  res.status(401).send("You are not authorized (requires board status).");
};

const requireAdminStatus = (req, res, next) => {
  if (authValidators.validateRequestForRole(req, accountTypeEnum.ADMIN)) {
    return next();
  }
  res.status(401).send("You are not authorized (requires admin status).");
};

module.exports = {
  requireChairStatus,
  requireBoardStatus,
  requireAdminStatus,
};
