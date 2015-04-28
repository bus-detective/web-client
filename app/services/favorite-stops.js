import Ember from 'ember';
var Obj = Ember.Object;

export default Ember.Service.extend({
  storeKey: "favoriteStops",
  store: window.localStorage,

  add: function(stop) {
    var newStops = this.get('all').concat(stop);
    this.replaceStops(newStops);
    this.notifyPropertyChange('all');
  },

  remove: function(stop) {
    var newStops = this.get('all').rejectBy('id', stop.id);
    this.replaceStops(newStops);
    this.notifyPropertyChange('all');
  },

  hasStop: function(stop) {
    return !!this.get('all').findBy('id', stop.id);
  },

  all: Ember.computed(function() {
    var stops = this.store[this.storeKey];
    return stops ? JSON.parse(stops).map( s => Obj.create(s)) : [];
  }),

  replaceStops: function(stops) {
    this.store[this.storeKey] = JSON.stringify(stops);
  }
});
