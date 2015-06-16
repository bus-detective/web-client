import Ember from 'ember';
import { fetchDepartures } from 'bus-detective/utils/api';
var run = Ember.run;

const POLL_INTERVAL = 15 * 1000;

export default Ember.Route.extend({
  pendingRefresh: null,
  
  model: function() {
    return this.fetch();
  },

  fetch: function() {
    return fetchDepartures(this.modelFor('stop').get('id')).then(run.bind(this, 'handleFetchSuccess'));
  },

  handleFetchSuccess: function(departures) {
    this.controllerFor('stop.departures').set('model', departures);
    this.set('pendingRefresh', run.later(this, this.fetch, POLL_INTERVAL));
  },

  actions: {
    willTransition: function() {
      run.cancel(this.get('pendingRefresh'));
    }
  }
});
