import Ember from 'ember';
var inject = Ember.inject;
var computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['search'],
  searchQuery: inject.service(),
  currentQuery: computed.oneWay('searchQuery.value'),
  autofocus: false,
  hasSearchValue: computed.notEmpty('currentQuery'),

  actions: {
    search() {
      var currentQuery = this.get('currentQuery');

      if (currentQuery !== "") {
        this.set('searchQuery.value', this.get('currentQuery'));
        this.sendAction();
      }
    }
  }
});
