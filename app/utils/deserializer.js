import Ember from 'ember';

export function wrap(obj) {
  return Ember.Object.create(obj);
}

export function extractOne(response) {
  return wrap(response['data']);
}
