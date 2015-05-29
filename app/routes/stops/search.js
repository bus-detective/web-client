import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  model: function(params) {
    return searchStops(params);
  }
});
