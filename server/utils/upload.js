const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1",
});

s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

exports.upload_image = async(image,date) => {
 try {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key:image.name + date,
    Body: Buffer.from(image.data),
    ContentType:image.mimetype,
    ACL: "public-read",
  };
  function uploadToS3(params) {
    return new Promise((resolve, reject) => {
      s3.upload(params, async (err, data) => {
        if (data) {
          let link = await data.Location;
          resolve(link);
        } else {
          console.log('Error in S3 upload', err);
          reject(err);
        }
      });
    });
  }
  const link = await uploadToS3(params);
  return link
 } catch (error) {
   console.log(error)
  return false;
 }
};
