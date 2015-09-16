/* global L */

// force imagePath
L.Icon.Default.imagePath = "//";

import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bd-map', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  this.subject({ lat: 123, lng: 456 });
  this.render();
  
  assert.equal(this.$().find('.leaflet-tile-pane').length, 1);
});
