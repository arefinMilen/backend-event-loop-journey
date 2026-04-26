const {ImageKit} = require("@imagekit/nodejs")

const ImageKitClient = new ImageKit({
  privateKey: process.env.IMAGE_PRIVATE_KEY,
})

const uploadFile = async (file) => {
  
  const result = await ImageKitClient.files.upload({
      file,
      fileName: "music_" + Date.now(),
      folder:"backend/project-2"

  })
  return {
    uri: result.url,
    fileId: result.fileId,
    name: result.name
  };
}


module.exports = { uploadFile };