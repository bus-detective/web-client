import Ember from 'ember';
import DepartureFetcher from 'bus-detective/utils/departure-fetcher';

export default Ember.Route.extend({
  beforeModel() {
    this.set('fetcher', DepartureFetcher.create({ stopId: this.modelFor('stop').get('id') }));
  },

  model() {
    return this.get('fetcher').startFetching();
  },

  actions: {
    willTransition: function() {
      this.get('fetcher').stopFetching(); 
    }
  }
});
