import Ember from 'ember';
var computed = Ember.computed;

export default Ember.Object.extend({
  content: Ember.A(),

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
