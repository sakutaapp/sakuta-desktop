const fs = require("fs");

if (fs.existsSync(`./releases/Sakuta 1.0.0.dmg`)) {
    fs.cpSync(`./releases/Sakuta 1.0.0.dmg`, `./releases/Sakuta-${require("./package.json").version}-M1.dmg`);
    fs.rmSync(`./releases/Sakuta 1.0.0.dmg`);
}
