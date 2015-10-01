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
    return {
      departures: this.get('departures'),
      fetcher: this.get('fetcher')
    };
  },

  actions: {
    willTransition: function() {
      this.get('fetcher').stopFetching();
    },

    loadMore: function() {
      this.get('fetcher').increaseDuration();
      this.get('fetcher').fetch();
    }
  },

  updateDepartures: function(response) {
    this.get('departures').clear().pushObjects(response.get('departures'));
  }
});
