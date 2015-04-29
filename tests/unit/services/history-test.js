import { moduleFor, test } from 'ember-qunit';

moduleFor('service:history');

test('captures a transition', function(assert) {
  var history = this.subject();
  var firstTransition = { name: "first" };
  var secondTransition = { name: "second" };

  history.capture(firstTransition);
  assert.equal(history.get('previous'), undefined);
  history.capture(secondTransition);
  assert.equal(history.get('previous'), firstTransition);
});
