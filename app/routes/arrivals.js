import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params) {
    return request(`/api/arrivals/${params.stop_id}`);
  }
});
