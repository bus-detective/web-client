import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stops', { path: "/" }, function() {
    this.route('near-by', { path: '/' });
    this.route('search');
    this.route('favorites');
  });
  this.route('routes');
  this.route('showRoute', { path: '/route/:route_id' });
  this.route('arrivals', { path: '/:stop_id' });
});

export default Router;
