import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: "/" });

  this.route('stops', function() {
    this.route('search');
    this.route('near-by');
    this.route('favorites');
  });

  this.route('stop', { path: 'stops/:stop_id' }, function(){
    this.route('departures', { path: '/' });
  });

  // STATIC MOCKS
  this.route('mocks', function(){
    this.route('route-detail');
  });
});

export default Router;
