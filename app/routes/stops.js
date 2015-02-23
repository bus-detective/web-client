import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { id: 'MADHYDi', name: "Madison Ave and Hyde Park Ave" },
      { id: 'HIGMILi', name: "Highland & Milton" },
      { id: 'GSQB', name: "Government Square" }
    ];
  },

  setupController: function(controller, model) {
    controller.set('stops', model);
  }
});
