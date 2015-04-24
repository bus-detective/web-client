import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('bd-toggle-favorite', {
  needs: ['service:favoriteStops', 'helper:bd-icon']
});

test('it toggles stop favorite', function(assert) {
  assert.expect(4);
  var component = this.subject();
  var favoriteStops = this.container.lookup('service:favoriteStops');
  var stop = Ember.Object.create({ id: Math.random(), name: "Fake stop" });

  component.set('stop', stop);
  this.render();

  assert.ok(!this.$().hasClass("toggle-favorite--favorite"));
  this.$().click();

  assert.ok(this.$().hasClass("toggle-favorite--favorite"));
  assert.ok(favoriteStops.hasStop(stop));

  this.$().click();
  assert.ok(!favoriteStops.hasStop(stop));
});
