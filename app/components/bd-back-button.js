import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['button button--return'],
  action: 'goBack',

  click: function() {
    this.sendAction();
  }
});
