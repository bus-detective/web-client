import Ember from 'ember';
var RSVP = Ember.RSVP;

class NotImplementedError extends Error {
  constructor(message, code) {
    super(message);
    this.message = message; // Bable doesn't pass message to super(), so we need to assign it here.
    this.code = code;
  }
}

export default Ember.Service.extend({
  fetchPosition: function() {
    return new RSVP.Promise(function(resolve, reject) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new NotImplementedError("geolocation is not supported by this device", -1));
      }
    });
  }
});
