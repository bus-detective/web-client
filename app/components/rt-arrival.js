import Ember from 'ember';
import moment from 'moment';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'li',
  clock: inject.service(),

  timeFromNow: Ember.computed('clock.time', function() {
    return moment(this.get('arrival.time')).fromNow();
  })
});
