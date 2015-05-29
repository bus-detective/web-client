import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  classNames: ['pager'],
  searchQuery: inject.service(),
  page: -1,
  totalPages: -1,
  showPrevious: function() {
    return this.get('page') > 1;
  }.property('page'),
  showNext: function() {
    return this.get('page') < this.get('totalPages');
  }.property('page', 'totalPages'),

  actions: {
    previousPage: function() {
      this.get('searchQuery').previousPage();
      this.sendAction();
    },
    nextPage: function() {
      this.get('searchQuery').nextPage();
      this.sendAction();
    }
  }
});

