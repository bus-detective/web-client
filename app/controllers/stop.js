import Ember from 'ember';
const { computed, ObjectProxy } = Ember;

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
  })
});
