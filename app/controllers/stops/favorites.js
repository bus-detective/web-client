import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Controller.extend({
  favoriteStops: inject.service(),
  stops: computed.readOnly('favoriteStops.all')
});
