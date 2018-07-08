import { moduleFor, test } from 'ember-qunit';

moduleFor('service:history');

test('captures a transition', function(assert) {
  var history = this.subject();
  history.clear();
  var firstTransition = { name: "first" };
  var secondTransition = { name: "second" };

  history.capture(firstTransition);
  history.capture(secondTransition);
  assert.equal(history.get('previous'), firstTransition);
});

test('returns null when no history', function(assert) {
  var history = this.subject();
  history.clear();
  var transition = { name: "first" };

  history.capture(transition);
  let previous = history.get('previous');
  assert.equal(previous, null);
});
