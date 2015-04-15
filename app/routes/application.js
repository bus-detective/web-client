import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Route.extend({
  searchQuery: inject.service(),

  actions: {
    search() {
      var params = { query: this.get('searchQuery.value') };
      this.transitionTo('stops.search', { queryParams: params });
    }
  }
});
