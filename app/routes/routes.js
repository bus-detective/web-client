import Ember from 'ember';
import request from 'ic-ajax';
import ENV from './../config/environment';

export default Ember.Route.extend({
  model: function() {
    return request(`${ENV.APP.SERVER}/api/routes`);
  }
});

