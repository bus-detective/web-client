import Ember from 'ember';
import request from 'ic-ajax';
import ENV from 'realtime-metro-web-client/config/environment';

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    }
  },

  model: function(params) {
    return params.name ? request(`${ENV.APP.SERVER}/api/stops?name=${params.name}`) : [];
  }
});
