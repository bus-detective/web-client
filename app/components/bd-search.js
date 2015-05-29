import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['search'],
  searchQuery: inject.service(),
  currentQuery: computed.oneWay('searchQuery.query'),
  autofocus: false,

  actions: {
    search() {
      this.get('searchQuery').setQuery(this.get('currentQuery'));
      this.sendAction();
    }
  }
});
