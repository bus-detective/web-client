import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bus-detective/tests/helpers/start-app';

var application;

module('Acceptance | Viewing stop departures', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting the stop page', function(assert) {
  var stop = server.create('stop', { name: "8th and Walnut" });
  server.createList('departure', 3);

  visit('/stops/' + stop.id);

  andThen(function() {
    assert.equal(find('.qa-stop-name').text(), "8th and Walnut");
    assert.equal(find('.qa-departure').size(), 3);
  });
});
