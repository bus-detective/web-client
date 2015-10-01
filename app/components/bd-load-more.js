import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['load-more'],
  tagName: 'button',

  click() {
    this.sendAction();
  }
});
