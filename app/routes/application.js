import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Route.extend({
  searchQuery: inject.service(),
  history: inject.service(),

  beforeModel: function(transition) {
    // capture the first page load
    this.get('history').capture(transition);
  },

  actions: {
    willTransition: function(transition) {
      this.get('history').capture(transition);
    },

    goBack: function() {
      var previousTransition = this.get('history.previous');
      if (previousTransition) {
        this.get('history').capture(previousTransition);
        previousTransition.retry();
      } else {
        this.transitionTo('home');
      }
    },

    search: function() {
      var params = { query: this.get('searchQuery.value') };
      this.transitionTo('stops.search', { queryParams: params });
    }
  }
});
