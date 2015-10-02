import Ember from 'ember';
const { inject } = Ember;

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['button button--return'],
  attributeBindings: ['href', 'title'],
  history: inject.service(),

  click: function() {
    this.get('history').goBack();
  }
});
