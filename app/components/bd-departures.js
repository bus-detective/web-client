import Ember from 'ember';
import DepartureFetcher from 'bus-detective/utils/departure-fetcher';
let { run, computed } = Ember;
const MAXIMUM_DURATION_IN_HOURS = 12;

export default Ember.Component.extend({
  stop: null,
  departures: null,
  fetcher: null,
  canLoadMore: computed.lt('fetcher.duration', MAXIMUM_DURATION_IN_HOURS),
  hasFetched: computed.alias('fetcher.hasFetched'),

  init() {
    this._super(...arguments);
    this.set('departures', Ember.ArrayProxy.create({ content: [] }));
    this.set('fetcher', DepartureFetcher.create({
      stopId: this.get('stop').get('id'),
      onFetchComplete: run.bind(this, 'updateDepartures')
    }));
  },

  didInsertElement() {
    this.get('fetcher').startFetching();
  },

  willDestroyElement() {
    this.get('fetcher').stopFetching();
  },

  updateDepartures(departures) {
    this.get('departures').clear().pushObjects(departures);
    this.sendAction('onLoad', this.get('departures'))
  },

  actions: {
    loadMore() {
      this.get('fetcher').increaseDuration();
    }
  }
});

