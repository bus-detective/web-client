import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  searchQuery: inject.service(),

  actions: {
    search: function() {
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
