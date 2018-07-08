import { lt, alias } from '@ember/object/computed';
import Component from '@ember/component';
import { run } from '@ember/runloop';
import DepartureFetcher from 'bus-detective/utils/departure-fetcher';
const MAXIMUM_DURATION_IN_HOURS = 12;

export default Component.extend({
  stop: null,
  departures: null,
  fetcher: null,
  canLoadMore: lt('fetcher.duration', MAXIMUM_DURATION_IN_HOURS),
  hasFetched: alias('fetcher.hasFetched'),

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
    this.sendAction('onLoad', departures);
  },

  actions: {
    loadMore() {
      this.get('fetcher').increaseDuration();
    }
  }
});

