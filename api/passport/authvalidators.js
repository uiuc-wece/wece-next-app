const validateRequestForRole = (req, accountType) => {
  if (!req.isAuthenticated()) {
    return false;
  }
  if (!req.user) {
    return false;
  }
  return req.user.accountType === accountType;
};

module.exports = { validateRequestForRole };
