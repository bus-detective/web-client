import Ember from 'ember';
import { searchTrips } from 'bus-detective/utils/api';
const { run, computed, ObjectProxy } = Ember;

export default Ember.Controller.extend({
  trips: [],

  markers: computed('model', function() {
    return [{ 
      title: this.get('model.name'),
      lat: this.get('model.latitude'),
      lng: this.get('model.longitude')
    }];
  }),

  shapes: computed.map('trips', function(trip) {
    return ObjectProxy.create({ content: trip.shape, color: trip.route.color });
  }),

  handleTripsFetch(response) {
    this.set('trips', response.results);
  },

  actions: {
    departuresDidLoad(departures) {
      let tripIds = departures.mapBy('trip.id');
      searchTrips({ ids: tripIds }).then(run.bind(this, 'handleTripsFetch'));
    }
  } 
});
