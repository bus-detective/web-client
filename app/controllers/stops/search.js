import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Controller.extend({
  searchQuery: inject.service(),
  query: computed.alias('searchQuery.value'),
  queryParams: ['query']
});

