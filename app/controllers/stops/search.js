import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Controller.extend({
  searchQuery: inject.service(),
  queryParams: ['query', 'page'],
  query: null,
  page: 1
});

