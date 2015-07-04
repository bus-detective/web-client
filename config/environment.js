/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bus-detective',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {},
    segment: {
      WRITE_KEY: process.env['SEGMENT_WRITE_KEY'] || '',
      LOG_EVENT_TRACKING: true
    },
    cdnHost: process.env['CDN_HOST'],

    APP: {
      SERVER: ''
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com browser-update.org cdn.segment.com *.getclicky.com *.google-analytics.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' localhost:3000 *.busdetective.com api.segment.io",
    'img-src': "'self' *.googleapis.com csi.gstatic.com browser-update.org *.google-analytics.com *.openstreetmap.fr " + process.env['CDN_HOST'],
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
  }

  return ENV;
};
