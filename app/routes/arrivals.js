import Ember from 'ember';
import { fetchArrivalsByStopId } from 'bus-detective/utils/api';
var run = Ember.run;

const POLL_INTERVAL = 15 * 1000;

export default Ember.Route.extend({
  pendingRefresh: null,

  model: function(params) {
    this.update();

    return {
      arrivals: [],
      stopId: params['stop_id'],
      isLoading: true
    };
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
  },

  update: function() {
    var params = this.paramsFor('arrivals');
    fetchArrivalsByStopId(params.stop_id).then(run.bind(this, 'requestDidFinish'));
  },

  requestDidFinish: function(arrivals) {
    this.controller.setProperties({
      arrivals: arrivals,
      isLoading: false
    });

    // Enqueue a refresh
    this.set('pendingRefresh', run.later(this, this.update, POLL_INTERVAL));
  },

  actions: {
    willTransition: function() {
      run.cancel(this.get('pendingRefresh'));
    }
  }
});
