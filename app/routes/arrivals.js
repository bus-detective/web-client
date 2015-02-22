import Ember from 'ember';
import request from 'ic-ajax';
var run = Ember.run;

const POLL_INTERVAL = 15 * 1000;
const SERVER = 'http://realtime-metro.herokuapp.com/api';

export default Ember.Route.extend({
  pendingRefresh: null,

  model: function(params) {
    this.enqueueRefresh();
    return request(`${SERVER}/arrivals/${params.stop_id}`);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('stopId', this.paramsFor('arrivals')['stop_id'])
  },

  enqueueRefresh: function() {
    this.set('pendingRefresh', run.later(this, this.refresh, POLL_INTERVAL));
  },

  cancelRefresh: Ember.on('willTransition', function() {
    run.cancel(this.get('pendingRefresh'));
  })
});
