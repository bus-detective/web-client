import Ember from 'ember';
import { fetchStop, searchTrips } from 'bus-detective/utils/api';
const { run, inject } = Ember;

export default Ember.Route.extend({
  vehiclePositions: inject.service(),

  model: function(params) {
    return fetchStop(params.stop_id);
  },

  handleTripFetchSuccess(response) {
    this.set('controller.trips', response.results);
  },

  afterModel: function(model) {
    if (model) {
      this.get('vehiclePositions').init(model);
      this.get('vehiclePositions').on('update', data => {
        this.get('controller').set('vehiclePositions', data);
      });
    }
  },

  deactivate: function() {
    this.get('vehiclePositions').unsubscribeAll();
  },

  handleTripsFetch(response) {
    this.get('controller').set('trips', response.results);
  },

  actions: {
    departuresDidLoad(departures) {
      let tripIds = departures.mapBy('trip.id');
      searchTrips({ ids: tripIds }).then(run.bind(this, 'handleTripsFetch'));
      let tripRemoteIds = departures.mapBy('trip.remote_id');
      this.get('vehiclePositions').setTripIds(tripRemoteIds);
    }
  }
});
