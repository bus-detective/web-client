import Ember from 'ember';
import moment from 'moment';
import { fetchDepartures } from 'bus-detective/utils/api';
var run = Ember.run;

const DEFAULT_POLL_INTERVAL = 15 * 1000;
const DEFAULT_CHECK_INTERVAL = 0.5 * 1000;

export default Ember.Object.extend({
  stopId: null,
  intervalId: null,

  init() {
    this._super();
    this.setProperties({
      departures: Ember.ArrayProxy.create({ content: [] }),
      pollInterval: this.get('pollInterval') || DEFAULT_POLL_INTERVAL,
      checkInterval: this.get('checkInterval') || DEFAULT_CHECK_INTERVAL
    });
  },

  fetch() {
    this.set('nextFetchTime', moment().add(this.get('pollInterval'), 'milliseconds'));
    return fetchDepartures(this.get('stopId')).then(run.bind(this, 'handleFetchSuccess'));
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

  handleFetchSuccess(response) {
    return this.get('departures').clear().pushObjects(response.get('departures'));
  }
});
