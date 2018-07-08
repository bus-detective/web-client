import { inject as service } from '@ember/service';
import { oneWay, notEmpty } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['search'],
  searchQuery: service(),
  currentQuery: oneWay('searchQuery.value'),
  autofocus: false,
  hasSearchValue: notEmpty('currentQuery'),

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
