const {ImageKit }= require("@imagekit/nodejs");


const imageKit = new ImageKit({
  privateKey: process.env.IMAGE_KIT
})

 const uploadFile = async (buffer) => {
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "my-image.jpg"
  })
  return result;  
}

module.exports = uploadFile;
