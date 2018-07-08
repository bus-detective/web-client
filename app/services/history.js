import { A } from '@ember/array';
import { computed } from '@ember/object';
import EmberService from '@ember/service';

export default EmberService.extend({
  content: A(),

  capture: function(transition) {
    this.get('content').pushObject(transition);
  },

  clear: function() {
    this.get('content').clear();
  },

  previous: computed('content.length', function() {
    this.get('content').popObject();
    return this.get('content').popObject();
  })
});
