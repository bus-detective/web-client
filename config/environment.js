/* jshint node: true */
/* globals process, module */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bus-detective',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {
      SERVER: ''
    },
    cdnHost: process.env['CDN_HOST']
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com cdn.segment.com *.getclicky.com *.google-analytics.com",
    'font-src': "'self' fonts.gstatic.com " + process.env['CDN_HOST'],
    'connect-src': "'self' localhost:3000 *.busdetective.com api.segment.io",
    'img-src': "'self' *.googleapis.com csi.gstatic.com *.google-analytics.com *.openstreetmap.fr " + process.env['CDN_HOST'],
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com"
  };

  ENV.googleAnalytics = {
    webPropertyId: process.env['GOOGLE_ANALYTICS_KEY']
  };

  if (environment === 'development') {
    ENV.APP.SERVER = process.env['API_HOST'] || '';

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
    ENV.rootURL = '/';
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
