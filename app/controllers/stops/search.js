import Ember from 'ember';
var computed = Ember.computed;

export default Ember.Controller.extend({
  queryParams: ['name'],
  name: '',

  nameField: computed.oneWay('name'),

  didSearch: computed.gte('stops.length', 0),

  actions: {
    search: function() {
      this.set('name', this.get('nameField'));
    }
  }
});

