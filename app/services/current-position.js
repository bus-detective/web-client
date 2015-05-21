import Ember from 'ember';
var RSVP = Ember.RSVP;

export default Ember.Service.extend({
  fetch: function() {
    return new RSVP.Promise(function(resolve, reject) {
      if ("geolocation" in navigator) {
        reject('geolocation not supported');
      } else {
        navigator.geolocation.getCurrentPosition(resolve, function() {
          reject('geolocation did not work or was disallowed');
        });
      }
    });
  }
});
