import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';
let inject = Ember.inject;
let run = Ember.run;

export default Ember.Route.extend({
  geolocation: inject.service(),
  currentPosition: null,

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  beforeModel: function() {
    return this.get('geolocation').fetchPosition().then(
      run.bind(this, 'handlePositionSuccess'),
      run.bind(this, 'handlePositionError')
    );
  },

  model: function(params) {
    return searchStops({
      latitude: this.get('currentPosition.coords.latitude'), 
      longitude: this.get('currentPosition.coords.longitude'),
      page: params.page
    });
  },

  handlePositionSuccess: function(position) {
    this.set('currentPosition', position);
  },

  handlePositionError: function(err) {
    Ember.Logger.error(err);
    this.transitionTo('errors.geolocation-error', { code: err.code });
  }
});
