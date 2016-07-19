import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['button button--return'],
  attributeBindings: ['href', 'title'],
  action: 'goBack',

  click: function() {
    this.sendAction();
  }
});
