import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goBack: function() {
      window.history.go(-1);
    }
  }
});
