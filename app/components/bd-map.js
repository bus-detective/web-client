import Leaflet from 'bd-pro/utils/leaflet';

import Ember from 'ember';
let { run } = Ember;

export default Ember.Component.extend({
  shapes: null,
  map: null,
  lat: null,
  lng: null,
  zoom: null,
  zoomControl: false,

  didInsertElement() {
    this._configureMap();
  },

  didUpdateAttrs() {
    run.once(this, '_drawShapes');
  },

  willRemoveElement() {
    var map = this.get('map');
    if (map) { map.remove(); }
  },

  _configureMap() {
    var el = this.get('element');
    var map = L.map(el, { zoomControl: this.get('zoomControl') });
    var center = [this.get('lat'), this.get('lng')];
    var zoom = this.get('zoom');

    this.set('map', map);
    map.setView(center, zoom);

    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      detectRetina: true
    }).addTo(map);

    L.marker(center).addTo(map);
  },

  _drawShapes() {
    this.get('shapes').forEach((shape) => {
      let line = L.polyline(shape.coordinates, { color: 'red' }).addTo(this.get('map'));
    })
  }
});
