/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bus-detective',
    environment: environment,
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ember-metal-is-present': true,
        'ember-htmlbars-inline-if-helper': true,
        'ember-htmlbars-attribute-syntax': true,
        'ember-routing-transitioning-classes': true,
        'new-computed-syntax': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      SERVER: process.env['API_HOST'] || ''
    }
  };

  // Google Maps

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
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
