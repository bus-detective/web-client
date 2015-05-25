import Ember from 'ember';

export default Ember.Controller.extend({
  errorCode: Ember.computed('model', function() {
    // coorse string to integer
    return +this.get('model.code');
  }),

  isGeolocationSupported: Ember.computed.equal('errorCode', -1),
  isGeolocationDenied: Ember.computed.equal('errorCode', 1),
  isGeolocationError: Ember.computed.gt('errorCode', 1)
});

