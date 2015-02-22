import Ember from 'ember';

export function toTime(input) {
  return new Date(input * 1000);
}

export default Ember.Handlebars.makeBoundHelper(toTime);
