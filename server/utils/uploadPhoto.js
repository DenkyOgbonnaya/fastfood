// should upload photo to cloudinary and return uploaded url
const uploadPhoto = async (photo, uploader) => {
    const { createReadStream } = await photo;
    try {
      const result = await new Promise((resolve, reject) => {
        createReadStream().pipe(
          uploader.upload_stream((error, result) => {
            if (error) {
              reject(error);
            }
            resolve(result);
          })
        );
      });
      return result.secure_url;
    } catch (err) {
      throw err;
    }
  };
  
  module.exports = uploadPhoto;