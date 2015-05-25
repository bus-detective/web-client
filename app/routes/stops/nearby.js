import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';
var inject = Ember.inject;

export default Ember.Route.extend({
  currentPosition: inject.service(),

  model: function() {
    return this.get('currentPosition').fetch().then(
      Ember.run.bind(this, this.searchStopsByPosition),
      Ember.run.bind(this, this.handlePositionError)
    );
  },

  searchStopsByPosition: function(position) {
    return searchStops({
      latitude: position.coords.latitude, 
      longitude: position.coords.longitude
    });
  },

  handlePositionError: function(err) {
    Ember.Logger.error(err);
    this.transitionTo('errors.geolocation-error', { code: err.code });
  }
});
