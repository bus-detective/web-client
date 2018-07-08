import Component from '@ember/component';

export default Component.extend({
  classNames: ['button', 'button--load-more'],
  tagName: 'button',

  click() {
    this.sendAction();
  }
});
