import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });

  this.route('stops', function() {
    this.route('search');
    this.route('nearby');
    this.route('favorites');
  });

  this.route('stop', { path: 'stops/:stop_id' }, function(){
    this.route('departures', { path: '/' });
  });

  // STATIC MOCKS
  this.route('mocks', function(){
    this.route('route-detail');
  });

  this.route('500');
  this.route('404', { path: '/*path' });
});

export default Router;
