import Ember from 'ember';
var computed = Ember.computed;

export default Ember.Controller.extend({
  arrivalSorting: ['time:asc'],
  sortedArrivals: computed.sort('arrivals', 'arrivalSorting')
});
