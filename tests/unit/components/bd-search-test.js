import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bd-search', {
  needs: ['service:searchQuery']
});

test('sets the input value to the searchQuery.value', function(assert) {
  assert.expect(1);
  var component = this.subject();
  var searchQuery = component.get('searchQuery');
  this.render();
 
  Ember.run(function() {
    searchQuery.set('value', "foo");
  });

  assert.equal(this.$('input').val(), "foo");
});

test('sets the searchQuery value when submitted', function(assert) {
  assert.expect(2);
  var component = this.subject();
  var searchQuery = component.get('searchQuery');
  this.render();

  this.$('input').val("foo").trigger("change"); // Not sure why trigger is nessessary
  assert.equal(searchQuery.get('value'), "");
  this.$('form').submit();
  assert.equal(searchQuery.get('value'), "foo");
});
