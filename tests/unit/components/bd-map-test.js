import Leaflet from 'bus-detective/utils/leaflet';
import { moduleForComponent, test } from 'ember-qunit';

Leaflet.Icon.Default.imagePath = "//";

moduleForComponent('bd-map', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test("it renders", function(assert) {
  this.subject({ lat: 123, lng: 456});
  this.render();
  
  assert.equal(this.$().find('.leaflet-tile-pane').length, 1);
});

test("isExpanded",  function(assert) {
  this.subject({ lat: 123, lng: 456});
  this.render();
  assert.equal(this.$().hasClass("map--expanded"), false);
  this.$().find(".qa-toggle-expanded").click();
  assert.equal(this.$().hasClass("map--expanded"), true);
});
