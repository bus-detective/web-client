import Ember from 'ember';
import moment from 'moment';
import { fetchDepartures } from 'bus-detective/utils/api';
var run = Ember.run;

const DEFAULT_POLL_INTERVAL = 15 * 1000;
const DEFAULT_CHECK_INTERVAL = 0.5 * 1000;
const DEFAULT_END_TIME_OFFSET = 1;

export default Ember.Object.extend({
  stopId: null,
  intervalId: null,

  init() {
    this._super();
    this.setProperties({
      pollInterval: this.get('pollInterval') || DEFAULT_POLL_INTERVAL,
      checkInterval: this.get('checkInterval') || DEFAULT_CHECK_INTERVAL,
      endTimeOffset: this.get('endTimeOffset') || DEFAULT_END_TIME_OFFSET
    });
  },

  fetch() {
    this.set('nextFetchTime', moment().add(this.get('pollInterval'), 'milliseconds'));
    return fetchDepartures({ stopId: this.get('stopId'), endTimeOffset: this.get('endTimeOffset') }).then(this.onFetchComplete);
  },

  fetchIfNessessary() {
    let now = moment();
    if (now.isAfter(this.get('nextFetchTime'))) {
      this.fetch();
    }
  },

  startFetching() {
    this.set('intervalId', setInterval(run.bind(this, 'fetchIfNessessary'), this.get('checkInterval')));
    return this.fetch();
  },

  stopFetching() {
    clearInterval(this.get('intervalId'));
  },

  increaseEndTimeOffset() {
    this.set('endTimeOffset', this.get('endTimeOffset') + 3);
  }
});
