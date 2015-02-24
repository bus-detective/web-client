import Ember from 'ember';
import request from 'ic-ajax';
import ENV from './../config/environment';
var run = Ember.run;

const POLL_INTERVAL = 15 * 1000;

export default Ember.Route.extend({
  pendingRefresh: null,

  model: function(params) {
    // Eagerly load template
    request(`${ENV.APP.SERVER}/api/arrivals/${params.stop_id}`).then(run.bind(this, 'requestDidFinish'));
  },

  setupController: function(controller) {
    controller.setProperties({
      arrivals: [],
      stopId: this.paramsFor('arrivals')['stop_id'],
      isLoading: true
    });
  },

  requestDidFinish: function(response) {
    this.controller.setProperties({
      arrivals: response.arrivals,
      isLoading: false
    });

    // Enqueue a refresh
    this.set('pendingRefresh', run.later(this, this.refresh, POLL_INTERVAL));
  },

  actions: {
    willTransition: function() {
      run.cancel(this.get('pendingRefresh'));
    }
  }
});
