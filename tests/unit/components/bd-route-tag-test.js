import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bd-route-tag', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(1);

  // creates the component instance
  var component = this.subject({ route: { color: "eee", text_color: "fff"} });

  this.render();
  
  assert.equal(this.$().attr('style'), "background-color: #eee; color: #fff");
});
