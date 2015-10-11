import Ember from 'ember';
import { fetchStop, searchTrips } from 'bus-detective/utils/api';
let { run } = Ember;

export default Ember.Route.extend({
  model: function(params) {
    return fetchStop(params.stop_id);
  }
});
