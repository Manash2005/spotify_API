const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file) {
  const result = await imagekit.files.upload({
    file: file,
    fileName: "music_" + Date.now(),
    folder: "music",
  });
  return result;
}

module.exports = { uploadFile };
