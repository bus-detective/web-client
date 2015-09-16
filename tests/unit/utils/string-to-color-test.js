import stringToHue from '../../../utils/string-to-hue';
import QUnit from 'qunit';
import { module, test } from 'qunit';

module('string-to-hue');

function inRange(actual) {
  var min = 0;
  var max = 359;
  var result = actual >= min && actual <= max;
  QUnit.push(result, actual, actual, `${actual} is not between ${min} and ${max}`);
}

test('getting colors', function() {
  inRange(stringToHue("11"));
  inRange(stringToHue("12x"));
  inRange(stringToHue("100"));
  inRange(stringToHue("43"));
  inRange(stringToHue("Some crazy value"));
});
