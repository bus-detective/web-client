import Ember from 'ember';
import request from 'ic-ajax';
import ENV from 'realtime-metro-web-client/config/environment';
import serializeStops from 'realtime-metro-web-client/utils/serialize-stops';

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    }
  },

  model: function(params) {
    if (params.name) {
      return request(`${ENV.APP.SERVER}/api/stops?name=${params.name}`).then(serializeStops);
    } else {
      return [];
    }
  },

  setupController: function(controller, model) {
    controller.set('stops', model);
  }
});
