import Ember from 'ember';
import { fetchStop, searchTrips } from 'bus-detective/utils/api';
const { run } = Ember;

export default Ember.Route.extend({
  model: function(params) {
    return fetchStop(params.stop_id);
  },
  handleTripFetchSuccess(response) {
    this.set('controller.trips', response.results);
  },
  handleVehiclePositonFetchSuccess(trips) {
    return []
  },
  actions: {
    departuresDidUpdate(departures) {
      let tripIds = departures.mapBy('trip.id');
      searchTrips({ ids: tripIds }).then(run.bind(this, 'handleTripFetchSuccess'));
      this.get('store').query('vehiclePosition', { trip_ids: tripIds }).then(run.bind(this, 'handleVehiclePositonFetchSuccess'));
    }
  }
});
