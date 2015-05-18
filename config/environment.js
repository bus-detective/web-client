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

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      SERVER: process.env['API_HOST'] || ''
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com maps.gstatic.com browser-update.org cdn.segment.com *.getclicky.com *.google-analytics.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' *.busdetective.com maps.gstatic.com api.segment.io",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com browser-update.org *.google-analytics.com *.openstreetmap.fr",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };

  ENV.googleAnalytics = {
    webPropertyId: process.env['GOOGLE_ANALYTICS_KEY']
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV.APP.SERVER = 'http://localhost:5000'

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
    ENV.APP.SERVER = '';
  }

  return ENV;
};
