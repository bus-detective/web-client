import EmberObject from '@ember/object';

export function wrap(obj) {
  return EmberObject.create(obj);
}

export function extractOne(response) {
  return wrap(response['data']);
}
