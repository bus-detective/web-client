/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bus-detective',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {},
    cdnHost: process.env['CDN_HOST'],

    APP: {
      SERVER: ''
    },
    SocketURI: "wss://localhost:4000"
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com cdn.segment.com *.getclicky.com *.google-analytics.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' *",
    'img-src': "'self' *.googleapis.com csi.gstatic.com *.google-analytics.com *.openstreetmap.fr " + process.env['CDN_HOST'],
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com"
  };

  ENV.googleAnalytics = {
    webPropertyId: process.env['GOOGLE_ANALYTICS_KEY']
  };

  if (environment === 'development') {
    ENV.APP.SERVER = process.env['API_HOST'] || '';
    ENV.APP.REALTIME_SERVER = process.env['REALTIME_API_HOST'] || '';

    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['segment'] = {
      WRITE_KEY: process.env['SEGMENT_WRITE_KEY'] || '',
      LOG_EVENT_TRACKING: false
    }
  }

  return ENV;
};
