import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Controller.extend({
  favoriteStops: inject.service()
});
