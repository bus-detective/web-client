import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  clock: service(),
  classNames: ['event', 'qa-departure'],
  classNameBindings: ['isPast:event--past:event--future'],

  time: computed('departure.time', function() {
    var time = moment(this.get('departure.time'));
    return time.format('h:mm') + time.format('a')[0];
  }),

  timeFromNow: computed('clock.time', function() {
    return moment(this.get('departure.time')).fromNow();
  }),

  isPast: computed('clock.time', function() {
    return new Date(this.get('departure.time')) < new Date();
  })
});
