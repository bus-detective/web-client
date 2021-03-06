import Ember from 'ember';
import moment from 'moment';
import { fetchDepartures } from 'bus-detective/utils/api';
let { run } = Ember;

const DEFAULT_POLL_INTERVAL = 15 * 1000;
const DEFAULT_CHECK_INTERVAL = 0.5 * 1000;
const DEFAULT_DURATION_IN_HOURS = 1;

export default Ember.Object.extend(Ember.Evented, {
  stopId: null,
  intervalId: null,
  hasFetched: false,
  pollInterval: DEFAULT_POLL_INTERVAL,
  checkInterval: DEFAULT_CHECK_INTERVAL,
  duration: DEFAULT_DURATION_IN_HOURS,

  fetch() {
    this.set('nextFetchTime', moment().add(this.get('pollInterval'), 'milliseconds'));
    return fetchDepartures({ stopId: this.get('stopId'), duration: this.get('duration') }).then(
      run.bind(this, 'handleFetchSuccess')
    );
  },

  handleFetchSuccess(response) {
    this.set('hasFetched', true);
    this.trigger('didFetch', response.get('departures'));
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

  increaseDuration() {
    this.set('duration', this.get('duration') + 3);
    this.fetch();
  }
});
