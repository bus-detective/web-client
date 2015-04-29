import Ember from 'ember';
var computed = Ember.computed;

export default Ember.Object.extend({
  content: Ember.A(),

  capture: function(transition) {
    this.get('content').pushObject(transition);
  },

  previous: computed('content.length', function() {
    return this.get('content').objectAt(this.get('content.length') - 2);
  })
});
