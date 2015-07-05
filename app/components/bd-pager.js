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
      let page = Math.max(this.get('page') - 1, 1);
      this.sendAction('onPageChange', page);
    },

    forward: function() {
      let page = Math.min(this.get('page') + 1, this.get('totalPages'));
      this.sendAction('onPageChange', page);
    }
  }
});

