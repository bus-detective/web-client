import { computed } from '@ember/object';
import Service from '@ember/service';
import { wrap } from 'bus-detective/utils/deserializer';

export default Service.extend({
  storeKey: "favoriteStops",
  store: window.localStorage,

  add: function(stop) {
    var newStops = this.get('all').concat(stop);
    this.replaceStops(newStops);
  },

  remove: function(stop) {
    var newStops = this.get('all').rejectBy('id', stop.id);
    this.replaceStops(newStops);
  },

  hasStop: function(stop) {
    return !!this.get('all').findBy('id', stop.id);
  },

  all: computed(function() {
    var stops = this.store[this.storeKey];
    return stops ? JSON.parse(stops).map(wrap) : [];
  }),

  replaceStops: function(stops) {
    this.store[this.storeKey] = JSON.stringify(stops);
    this.notifyPropertyChange('all');
  }
});
