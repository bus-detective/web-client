import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';
var inject = Ember.inject;

export default Ember.Route.extend({
  currentPosition: inject.service(),

  model: function() {
    var _this = this;
    return this.get('currentPosition').fetch().then(function(position){
      return searchStops({
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude 
      });
    }, function() {
      _this.transitionTo('stops.no-location');
    });
  }
});
