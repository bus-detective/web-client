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

  arrivalTime: Ember.computed('clock.time', function () {
    return moment(this.get('arrival.time')).format('h:mm');
  }),

  isPast: Ember.computed('clock.time', function() {
    return new Date(this.get('arrival.time')) < new Date();
  }),
});
