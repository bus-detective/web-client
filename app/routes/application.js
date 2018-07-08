import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  searchQuery: service(),
  history: service(),

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
        previousTransition.retry();
      } else {
        this.get('history').clear();
        this.transitionTo('home');
      }
    },

    search() {
      var params = {
        query: this.get('searchQuery.value'),
        page: 1
      };
      this.transitionTo('stops.search', { queryParams: params });
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
