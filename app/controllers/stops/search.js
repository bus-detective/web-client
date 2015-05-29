import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Controller.extend({
  searchQuery: inject.service(),
  queryParams: ['query', 'page'],
  query: null,
  page: 1,
  syncQueryParamToService: function() {
    if(this.get('query')) {
      this.set('searchQuery.query', this.get('query'));
    }
  }.observes('query'),
  syncPageParamToService: function() {
    if(this.get('page')) {
      this.set('searchQuery.page', this.get('page'));
    }
  }.observes('page')
});

