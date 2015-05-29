import Ember from 'ember';

export default Ember.Object.extend({
  query: "",
  page: 1,
  setQuery: function(q) {
    this.set('query', q);
    this.set('page', 1);
  },
  previousPage: function() {
    this.decrementProperty('page');
  },
  nextPage: function() {
    this.incrementProperty('page');
  },
  asParams: function(){
    return {
      query: this.get('query'),
      page: this.get('page')
    };
  }.property('query','page')
});
