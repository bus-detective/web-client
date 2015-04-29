import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['search'],
  searchQuery: inject.service(),
  currentQuery: computed.oneWay('searchQuery.value'),
  autofocus: false,

  actions: {
    search() {
      this.set('searchQuery.value', this.get('currentQuery'));
      this.sendAction();
    }
  }
});
