import Ember from 'ember';

export function extractOne(response) {
  return Ember.Object.create(response['data']);
}
