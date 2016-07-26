import Ember from 'ember';
import { getRoutes } from 'bus-detective/utils/api';

export default Ember.Route.extend({
  model: function() {
    return getRoutes();
  }
});
