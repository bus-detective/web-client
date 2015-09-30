import Ember from 'ember';
import DepartureFetcher from 'bus-detective/utils/departure-fetcher';

export default Ember.Route.extend({
  beforeModel() {
    this.set('departures', Ember.ArrayProxy.create({ content: [] }));

    this.set('fetcher', DepartureFetcher.create({
      onFetchComplete: Ember.run.bind(this, 'updateDepartures'),
      stopId: this.modelFor('stop').get('id')
    }));

    this.get('fetcher').startFetching();
  },

  model() {
    return this.get('departures');
  },

  actions: {
    willTransition: function() {
      this.get('fetcher').stopFetching();
    }
  },

  updateDepartures: function(response) {
    this.get('departures').clear().pushObjects(response.get('departures'));
  }
});
