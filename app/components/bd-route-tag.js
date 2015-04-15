import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  tagName: 'span',
  classNames: ['tag'],
  style: Ember.computed('route.id', function() {
    return `background-color: #${this.get('route.color')}`;
  })
});
