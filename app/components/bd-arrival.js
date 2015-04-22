import Ember from 'ember';
import moment from 'moment';
import stringToHue from 'bus-detective/utils/string-to-hue';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'li',
  clock: inject.service(),
  attributeBindings: ['style'],
  classNames: ['timeline__event'],
  classNameBindings: ['isPast:arrival--past'],

  timeFromNow: Ember.computed('clock.time', function() {
    return moment(this.get('arrival.time')).fromNow('mm');
  }),

  isPast: Ember.computed('clock.time', function() {
    return new Date(this.get('arrival.time')) < new Date();
  }),

  style: Ember.computed('arrival.route_id', function() {
    var hue = stringToHue(this.get('arrival.route_id').toString());
    return `color:            hsl(${hue}, 60%, 100%);
            background-color: hsl(${hue}, 50%, 55%);
            border-color:     hsl(${hue}, 50%, 55%);`;
  })
});
