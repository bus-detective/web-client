import { stringifyParams } from '../../../utils/api';
import { module, test } from 'qunit';

module('api');

test('object to query params', function(assert) {
  assert.equal(stringifyParams({'a': '1'}), "a=1");
  assert.equal(stringifyParams({'a': '1', b: '2'}), "a=1&b=2");
  assert.equal(stringifyParams({'query': 'Main & 5th'}), "query=Main%20%26%205th");
  assert.equal(stringifyParams({'ids': [1, 2, 3]}), "ids[]=1&ids[]=2&ids[]=3");
});

