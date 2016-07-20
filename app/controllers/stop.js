import Ember from 'ember';
const { computed, ObjectProxy } = Ember;

export default Ember.Controller.extend({
  trips: [],
  vehiclePositions: {},

  shapes: computed.map('trips', function(trip) {
    return ObjectProxy.create({ content: trip.shape, color: trip.route.color });
  })
});
