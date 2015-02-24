import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stops');
  this.route('routes', { path: '/' }, function(){
    this.route('route', { path: ':route_id' });
  });
  this.route('arrivals', { path: '/:stop_id' });
});

export default Router;
