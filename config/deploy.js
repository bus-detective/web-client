var dotenv = require('dotenv');
dotenv.load();

module.exports = {
  development: {
    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      type: 'redis', // the default store is 'redis'
      host: 'localhost',
      port: 6379
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      gzip: false, // if undefined or set to true, files are gziped
      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
      accessKeyId: process.env['S3_KEY'],
      secretAccessKey: process.env['S3_SECRET'],
      bucket: process.env['S3_BUCKET']
    }
  },
  production: {
    store: {
      host: process.env['REDIS_HOST'],
      port: process.env['REDIS_PORT'],
      password: process.env['REDIS_PASSWORD']
    },
    assets: {
      accessKeyId: process.env['S3_KEY'],
      secretAccessKey: process.env['S3_SECRET'],
      bucket: process.env['S3_BUCKET']
    }
  }
};

