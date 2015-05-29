import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Controller.extend({
  searchQuery: inject.service(),
  queryParams: ['query'],
  query: null,
  syncQueryParamToService: function() {
    if(this.get('query')) {
      this.set('searchQuery.query', this.get('query'));
    }
  }.observes('query')
});

