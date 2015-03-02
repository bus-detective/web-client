import Ember from 'ember';
import { fetchArrivalsByStopId } from 'realtime-metro-web-client/utils/api';
var run = Ember.run;

const POLL_INTERVAL = 15 * 1000;

export default Ember.Route.extend({
  pendingRefresh: null,

  model: function(params) {
    fetchArrivalsByStopId(params.stop_id).then(run.bind(this, 'requestDidFinish'));

    return {
      arrivals: [],
      stopId: params['stop_id'],
      isLoading: true
    };
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
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
