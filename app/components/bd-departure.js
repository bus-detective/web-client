import Ember from 'ember';
import moment from 'moment';
var inject = Ember.inject;

export default Ember.Component.extend({
  clock: inject.service(),
  classNames: ['event'],
  classNameBindings: ['isPast:event--past'],

  timeFromNow: Ember.computed('clock.time', function() {
    return moment(this.get('departure.time')).fromNow();
  }),

  isPast: Ember.computed('clock.time', function() {
    return new Date(this.get('departure.time')) < new Date();
  })
});

