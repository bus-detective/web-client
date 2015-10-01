import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['button', 'button--load-more'],
  tagName: 'button',

  click() {
    this.sendAction();
  }
});
