import Ember from 'ember';
var RSVP = Ember.RSVP;

export default Ember.Service.extend({
  fetch: function() {
    return new RSVP.Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
});
