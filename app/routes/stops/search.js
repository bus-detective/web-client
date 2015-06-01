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
    if (params.query !== this.get('searchQuery.query')) {
      this.set('searchQuery.query', params.query);
    }
    if (params.page !== this.get('searchQuery.page')) {
      this.set('searchQuery.page', params.page);
    }
    return searchStops(params);
  }
});
