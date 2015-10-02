/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},

    s3: {
      accessKeyId: process.env['S3_KEY'],
      secretAccessKey: process.env['S3_SECRET'],
      bucket: process.env['S3_BUCKET'],
      region: 'us-east-1'
    },

    redis: {
      host: process.env['REDIS_HOST'],
      port: process.env['REDIS_PORT'],
      password: process.env['REDIS_PASSWORD']
    },
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};

