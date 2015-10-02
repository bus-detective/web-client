import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['button button--return'],
  attributeBindings: ['href', 'title'],

  click: function() {
    this.sendAction();
  }
});
