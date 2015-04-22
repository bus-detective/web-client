import Ember from 'ember';
import stringToHue from 'bus-detective/utils/string-to-hue';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  tagName: 'span',
  classNames: ['tag'],
  style: Ember.computed('route.route_id', function() {
    var hue = stringToHue(this.get('route.route_id').toString());
    return `background-color: hsl(${hue}, 50%, 55%);`;
  })
});
