import { moduleFor, test } from 'ember-qunit';

moduleFor('service:geolocation');

test('fetches the current position', function(assert) {
  assert.expect(1);
  var geolocation = this.subject();
  
  var handleSuccess = function(position) {
    // the browser supports geolcoation so we expect to succeed when running in the browser
    assert.ok(position.coords);
  };

  var handleError = function(err) {
    // phantomjs doesn't support geolcoation so we expect the error when running `ember test`
    assert.equal(err.code, -1);
  };

  // return the promise so qunit waits for it to resolve
  return geolocation.fetchPosition().then(handleSuccess, handleError);
});
