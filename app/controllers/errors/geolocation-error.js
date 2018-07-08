import { equal, gt } from '@ember/object/computed';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  errorCode: computed('model', function() {
    // coorse string to integer
    return +this.get('model.code');
  }),

  isGeolocationSupported: equal('errorCode', -1),
  isGeolocationDenied: equal('errorCode', 1),
  isGeolocationError: gt('errorCode', 1)
});

