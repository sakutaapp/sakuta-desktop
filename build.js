const fs = require("fs");
const nativefier = require("nativefier").default;

if (fs.existsSync("./out")) {
    fs.rmdirSync("./out", { recursive: true });
}

fs.mkdirSync("./out");
// fs.mkdirSync("./out/dev");

const options = {
    name: "Sakuta",
    targetUrl: "https://sakuta.app",
    version: require("./package.json").version,
    out: "./out",
    overwrite: true,
    asar: false,
    counter: false,
    bounce: false,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: false,
    ignoreCertificate: false,
    ignoreGpuBlacklist: false,
    enableEs3Apis: false,
    internalUrls: "sakuta.app.*?",
    blockExternalUrls: false,
    insecure: false,
    honest: true,
    zoom: 1.0,
    singleInstance: false,
    clearCache: false,
    fileDownloadOptions: {
        saveAs: true,
    },
};

const devOptions = {
    ...options,
    targetUrl: "https://dev.sakuta.app",
    internalUrls: "dev.sakuta.app.*?",
    name: "Sakuta Dev",
    out: "./out/dev",
};

const platforms = [
    /*
    {
        platform: "linux",
        arch: "x64",
        iconType: "png",
    },
    {
        platform: "linux",
        arch: "ia32",
        iconType: "png",
    },
    {
        platform: "linux",
        arch: "arm64",
        iconType: "png",
    },
    */
    {
        platform: "windows",
        arch: "x64",
        iconType: "ico",
    },
    /*
    {
        platform: "win32",
        arch: "ia32",
        iconType: "ico",
    },
    */
    {
        platform: "osx",
        arch: "arm64",
        iconType: "icns",
    },
    {
        platform: "darwin",
        arch: "x64",
        iconType: "icns",
    },
    /*
    {
        platform: "mas",
        arch: "arm64",
        iconType: "icns",
    },
    */
];

platforms.forEach((platform) => {
    const platformOptions = {
        ...options,
        ...platform,
        icon: `./icons/icon.${platform.iconType}`,
    };

    const platformOptionsDev = {
        ...devOptions,
        ...platform,
        icon: `./icons/icon_dev.${platform.iconType}`,
    };

    nativefier(platformOptions, (error, appPath) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`${platform.platform} ${platform.arch} build complete`);
        }
    });

    /*
    nativefier(platformOptionsDev, (error, appPath) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`${platform.platform} ${platform.arch} build complete`);
        }
    });
    */
});
