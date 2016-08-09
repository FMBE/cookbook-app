/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'cookbook-app',
    podModulePrefix: 'cookbook-app/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: 'AIzaSyBNBC7yRR89U0FDgkFmC1q_mg0q3xzg37s',
      authDomain: 'cookbook-app.firebaseapp.com',
      databaseURL: 'https://cookbook-app.firebaseio.com',
      storageBucket: '',
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'firebase-simple-auth': {
        }
      }
    },

    'ember-simple-auth': {
      authenticationRoute: 'sessions',
      routeAfterAuthentication: 'posts'
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
  // ENV.APP.LOG_RESOLVER = true;
  ENV.APP.LOG_ACTIVE_GENERATION = true;
  ENV.APP.LOG_TRANSITIONS = true;
  ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
  ENV.APP.LOG_VIEW_LOOKUPS = true;
}

  if (environment === 'test') {
    // Testem prefers this...
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
