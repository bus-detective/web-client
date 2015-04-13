import {
  bdIcon
} from '../../../helpers/bd-icon';
import { module, test } from 'qunit';

module('BdIconHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = bdIcon('heart');
  assert.equal(result.toString(), '<i class="bd-icon bd-icon--heart"></i>');
});
