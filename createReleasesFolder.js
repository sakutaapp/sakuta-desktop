const fs = require("fs");

if (fs.existsSync("./releases")) {
    fs.rmdirSync("./releases", { recursive: true });
}

fs.mkdirSync("./releases");
