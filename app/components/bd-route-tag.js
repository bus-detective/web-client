import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['style'],
  tagName: 'span',
  classNames: ['tag'],
  style: computed('route.id', function() {
    return (`background-color: #${this.get('route.color')}; color: #${this.get('route.text_color')}`).htmlSafe();
  })
});
