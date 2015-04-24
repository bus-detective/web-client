import Ember from 'ember';
import { fetchDepartures } from 'bus-detective/utils/api';
var run = Ember.run;

const POLL_INTERVAL = 15 * 1000;

export default Ember.Route.extend({
  pendingRefresh: null,

  setupController: function(controller) {
    controller.setProperties({ model: null, isLoading: true });
    this.update();
  },

  update: function() {
    fetchDepartures(this.modelFor('stop').get('id')).then(run.bind(this, 'requestDidFinish'));
  },

  requestDidFinish: function(departure) {
    this.controller.setProperties({ model: departure, isLoading: false });

    // Enqueue a refresh
    this.set('pendingRefresh', run.later(this, this.update, POLL_INTERVAL));
  },

  actions: {
    willTransition: function() {
      run.cancel(this.get('pendingRefresh'));
    }
  }
});
