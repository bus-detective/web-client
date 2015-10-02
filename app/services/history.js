import Ember from 'ember';
const { inject, computed } = Ember;

export default Ember.Object.extend({
  routing: inject.service('-routing'),
  content: Ember.A(),

  init() {
    this._super(...arguments);
    this.get('routing.router').on('willTransition', (t) => this.capture(t));
  },

  goBack() {
    let previousTransition = this.get('previous');
    if (previousTransition) {
      this.capture(previousTransition);
      previousTransition.retry();
    } else {
      this.get('routing').transitionTo('home');
    }
  },

  capture: function(transition) {
    this.get('content').pushObject(transition);
  },

  clear: function() {
    this.get('content').clear();
  },

  previous: computed('content.length', function() {
    return this.get('content').objectAt(this.get('content.length') - 2);
  })
});
