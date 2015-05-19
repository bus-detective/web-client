/* jshint undef: true, unused: true */
/* global L */

import Ember from 'ember';

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

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }).addTo(map);

    L.marker(center).addTo(map);
  }
});

