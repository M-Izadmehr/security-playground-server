const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const textToImage = require("text-to-image");

const app = express();
app.use(cookieParser());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/image.png", async (req, res) => {
  const userAuthentication =
    req.cookies.authentication || "No authentication cookie";
  const textStyle = {
    fontSize: 18,
    fontFamily: "Arial",
    lineHeight: 30,
    margin: 10,
    textAlign: 'center',
    bgColor: "#32064A",
    textColor: "white",
  };
  const imgData = await textToImage.generate(userAuthentication, textStyle);
  const base64Data = imgData.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
  const img = Buffer.from(base64Data, "base64");

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": img.length,
  });
  res.end(img);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
