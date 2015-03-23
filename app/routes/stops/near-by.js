import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';
var inject = Ember.inject;

export default Ember.Route.extend({
  currentPosition: inject.service(),

  model: function() {
    searchStops({
      latitude: this.get('currentPosition.latitude'), 
      longitude: this.get('currentPosition.longitude')
    });
  },

  setupController: function(controller, model) {
    controller.set('stops', model);
  }
});
