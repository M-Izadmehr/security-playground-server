const loggedKeys = require('./loggedKeys')

const cssKeyLoggerGetKeysHandler = async (req, res) => {
  res.json(loggedKeys)
};

module.exports = cssKeyLoggerGetKeysHandler;
