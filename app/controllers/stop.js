import { map } from '@ember/object/computed';
import Controller from '@ember/controller';
import { run } from '@ember/runloop';
import { computed } from '@ember/object';
import ObjectProxy from '@ember/object/proxy';
import { searchTrips } from 'bus-detective/utils/api';

export default Controller.extend({
  trips: [],

  markers: computed('model', function() {
    return [{
      title: this.get('model.name'),
      lat: this.get('model.latitude'),
      lng: this.get('model.longitude')
    }];
  }),

  shapes: map('trips', function(trip) {
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
