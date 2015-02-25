import Ember from 'ember';
var computed = Ember.computed;

export default Ember.Controller.extend({
  queryParams: ['name'],
  name: '',

  nameField: computed.oneWay('name'),

  actions: {
    search: function() {
      this.set('name', this.get('nameField'));
    }
  }
});

