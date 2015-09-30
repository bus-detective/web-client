import Ember from 'ember';
import DepartureFetcher from 'bus-detective/utils/departure-fetcher';

export default Ember.Route.extend({
  departures: Ember.ArrayProxy.create({ content: [] }),

  beforeModel() {
    this.set('fetcher', DepartureFetcher.create({
      stopId: this.modelFor('stop').get('id'),
      onFetchComplete: Ember.run.bind(this, 'updateDepartures')
    }));
  },

  model() {
    return this.get('fetcher').startFetching().then(() => {
      return {
        departures: this.get('departures'),
        fetcher: this.get('fetcher')
      };
    });
  },

  updateDepartures(response) {
    this.get('departures').clear().pushObjects(response.get('departures'));
  },

  actions: {
    willTransition() {
      this.get('fetcher').stopFetching();
    },

    loadMore: function() {
      this.get('fetcher').increaseDuration();
      this.get('fetcher').fetch();
    }
  }
});
