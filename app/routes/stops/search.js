import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';
let inject = Ember.inject;

export default Ember.Route.extend({
  searchQuery: inject.service(),
  queryParams: {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  model: function(params) {
    // Hydrate the searchQuery service if the user comes in via url
    if (params.query !== this.get('searchQuery.value')) {
      this.set('searchQuery.value', params.query);
    }
    return searchStops(params);
  }
});
