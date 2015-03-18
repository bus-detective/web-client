import Ember from 'ember';
import moment from 'moment';
import stringToHue from 'realtime-metro-web-client/utils/string-to-hue';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'li',
  clock: inject.service(),
  attributeBindings: ['style'],
  classNames: ['rt-arrival'],

  timeFromNow: Ember.computed('clock.time', function() {
    return moment(this.get('arrival.time')).fromNow();
  }),

  style: Ember.computed('arrival.route_id', function() {
    var hue = stringToHue(this.get('arrival.route_id').toString());
    return `color:            hsl(${hue}, 60%, 25%);
            background-color: hsl(${hue}, 40%, 95%);
            border-color:     hsl(${hue}, 40%, 80%);`;
  })
});
