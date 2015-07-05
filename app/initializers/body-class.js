import Ember from 'ember';

export function initialize() {
  Ember.Route.reopen({
    activate: function() {
      if (this.get('bodyClass')) {
        Ember.$('body').addClass(this.get('bodyClass'));
      }
    },

    deactivate: function() {
      if (this.get('bodyClass')) {
        Ember.$('body').removeClass(this.get('bodyClass'));
      }
    }
  });
}

export default {
  name: 'body-class',
  initialize: initialize
};
