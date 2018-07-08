import $ from 'jquery';
import Route from '@ember/routing/route';

export function initialize() {
  Route.reopen({
    activate: function() {
      if (this.get('bodyClass')) {
        $('body').addClass(this.get('bodyClass'));
      }
    },

    deactivate: function() {
      if (this.get('bodyClass')) {
        $('body').removeClass(this.get('bodyClass'));
      }
    }
  });
}

export default {
  name: 'body-class',
  initialize: initialize
};
