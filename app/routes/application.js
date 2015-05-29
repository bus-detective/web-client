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
      this.transitionTo('stops.search', { queryParams: this.get('searchQuery.asParams') });
    },

    error: function(error) {
      switch (error.errorThrown) {
        case "Not Found":
          this.transitionTo('404');
          break;
        default:
          this.transitionTo('500');
      }
    }
  }
});
