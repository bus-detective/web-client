import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'bus-detective/tests/helpers/start-app';

var application;

module('Acceptance | Searching for stops', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting the search page', function(assert) {
  var stops = server.createList('stop', 3);
  visit('/stops/search?query=walnut');

  andThen(function() {
    assert.equal( find('.qa-stop').length, 3);
    assert.equal( find('.qa-search-query').val(), "walnut");
  });
});
