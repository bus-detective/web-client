import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pager'],
  page: -1,
  totalPages: -1,

  hasPrevious: function() {
    return this.get('page') > 1;
  }.property('page'),

  hasNext: function() {
    return this.get('page') < this.get('totalPages');
  }.property('page', 'totalPages'),

  isVisible: function() {
    return this.get('showPrevious') || this.get('showNext');
  }.property('showPrevious', 'showNext'),

  actions: {
    backward: function() {
      this.sendAction('backward');
    },

    forward: function() {
      this.sendAction('forward');
    }
  }
});

