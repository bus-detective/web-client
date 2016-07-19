import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['button button--return'],
  action: 'goBack',

  click: function() {
    this.sendAction();
  }
});
