const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1'
})

const s3 = new AWS.S3();

exports.handler = async () => {
  const fileContent = 'hellooooo, this is testing';
  const params = {
    Bucket: 'your-bucket-name',
    Key: 'data/test.txt',
    ACL: 'bucket-owner-full-control',
    Body: fileContent,
    ContentEncoding: 'utf8'
  }

  await s3.putObject(params).prom.then(() => {
    console.log('Successfully uploaded file to S3');
  }, (error) => {
    console.error('Error: ', error);
  });
}