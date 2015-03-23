import Ember from 'ember';

export default Ember.Service.extend({
  latitude: null,
  longitude: null,

  setup: Ember.on('init', function() {
    var service = this;
    
    var handleSuccess = function(position) {
      service.set('latitude', position.coords.latitude);
      service.set('longitude', position.coords.longitude);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess);
  })
});
