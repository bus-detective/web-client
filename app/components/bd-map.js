/* jshint undef: true, unused: true */
/* global L */

import Ember from 'ember';
import ENV from 'bus-detective/config/environment';

export default Ember.Component.extend({
  map: null,
  lat: null,
  lng: null,
  zoom: null,
  zoomControl: false,

  didInsertElement: function() {
    this._configureMap();
  },

  willRemoveElement: function() {
    var map = this.get('map');
    if (map) { map.remove(); }
  },

  _configureMap: function() {
    var el = this.get('element');
    var map = L.map(el, { zoomControl: this.get('zoomControl') });
    var center = [this.get('lat'), this.get('lng')];
    var zoom = this.get('zoom');

    this.set('map', map);
    map.setView(center, zoom);

    L.Icon.Default.imagePath = `//${ENV.cdnHost}/assets/images`;
    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      detectRetina: true
    }).addTo(map);

    L.marker(center).addTo(map);
  }
});
