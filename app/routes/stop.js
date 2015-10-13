import Ember from 'ember';
import { fetchStop } from 'bus-detective/utils/api';

export default Ember.Route.extend({
  model: function(params) {
    return fetchStop(params.stop_id);
  }
});
