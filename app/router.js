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

  this.route('routes');
  this.route('showRoute', { path: '/route/:route_id' });

  // STATIC PAGES
  this.route('stop-results');
  this.route('route-results');
  this.route('stop-detail');
  this.route('route-detail');
});

export default Router;
