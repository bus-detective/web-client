import Ember from 'ember';
import stringToHue from 'bus-detective/utils/string-to-hue';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  tagName: 'span',
  classNames: ['tag'],
  style: Ember.computed('route.id', function() {
    return `background-color: #${this.get('route.color')}; color: #${this.get('route.text_color')}`;
  })
});
