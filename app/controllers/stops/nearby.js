import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page'],
  page: 1,

  actions: {
    updatePage: function(page) {
      this.set('page', page);
    }
  }
});

