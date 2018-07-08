import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { searchStops } from 'bus-detective/utils/api';

export default Route.extend({
  searchQuery: service(),
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
