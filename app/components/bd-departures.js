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
    this.set('fetcher', DepartureFetcher.create({ stopId: this.get('stop.id') }));
    this.get('fetcher').on('didFetch', run.bind(this, 'updateDepartures'));
  },

  didInsertElement() {
    this.get('fetcher').startFetching();
  },

  willDestroyElement() {
    this.get('fetcher').stopFetching();
  },

  updateDepartures(departures) {
    this.set('departures', departures);
    this.attrs.onLoad(departures);
  },

  actions: {
    loadMore() {
      this.get('fetcher').increaseDuration();
    }
  }
});

