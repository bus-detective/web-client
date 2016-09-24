/* jshint node: true */
/* globals process, module */

module.exports = function(deployTarget) {
  const region = 'us-east-1';
  const accessKeyId = process.env['S3_KEY'];
  const secretAccessKey = process.env['S3_SECRET'];
  const bucket = process.env['S3_BUCKET'];

  var ENV = {
    build: {},
    's3-index': {
      allowOverwrite: true,
      region: region,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      bucket: bucket
    },
    s3: {
      region: region,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      bucket: bucket
    }
  };
  return ENV;
};

