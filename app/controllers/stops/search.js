import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query', 'page'],
  query: null,
  page: 1,

  actions: {
    previousPage: function() {
      var page = Math.max(this.get('page') - 1, 1);
      this.set('page', page);
    },

    nextPage: function() {
      var page = Math.min(this.get('page') + 1, this.get('model.total_pages'));
      this.set('page', page);
    }
  }
});

