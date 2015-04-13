import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';
var inject = Ember.inject;

export default Ember.Route.extend({
  currentPosition: inject.service(),

  model: function() {
    return this.get('currentPosition').fetch().then(function(position){
      return searchStops({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  },

  setupController: function(controller, model) {
    controller.set('stops', model);
  }
});
