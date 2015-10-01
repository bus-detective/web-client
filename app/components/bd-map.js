/* jshint undef: true, unused: true */
/* global L */

import Ember from 'ember';

var bind = Ember.run.bind;

var myIcon = L.icon({
  iconUrl: '/assets/images/monument-512.png',
  iconRetinaUrl: '/assets/images/monument-512.png',
  iconSize: [41, 41],
  iconAnchor: [20, 41]
});

export default Ember.Component.extend({
  map: null,
  lat: null,
  lng: null,
  zoom: null,
  zoomControl: false,
  markers: [],

  didInsertElement: function() {
    this._configureMap();
  },

  willRemoveElement: function() {
    var map = this.get('map');
    if (map) { map.remove(); }
  },

  _configureMap: function() {
    var el = this.get('element');
    var map = L.map(el, { zoomControl: false });
    var center = [this.get('lat'), this.get('lng')];
    var zoom = this.get('zoom');

    this.set('map', map);
    map.setView(center, zoom);
    map.locate({setView: true, maxZoom: 16});

    map.on('locationfound', bind(this, this._onLocationFound));
    map.on('locationerror', bind(this, this._onLocationError));

    L.control
      .zoom({ position: 'topright' })
      .addTo(map);

    L.tileLayer('https://api.mapbox.com/v4/{style}/{z}/{x}/{y}{format}?access_token={token}', {
      format: '@2x.png',
      style: 'mapbox.emerald',
      token: 'pk.eyJ1IjoiY2Rtd2VicyIsImEiOiJjaWVnaHdsNXowMDN2czZtM3g2Nm9zMHJkIn0.ZyY3UxiPh5eepFIKeYY-Xg',
      detectRetina: true
    }).addTo(map);

    this.addMarkers(this.get('markers'));
  },

  addMarkers: function(markers) {
    var map = this.get('map');
    this.get('markers').forEach(function(marker, index) {
      var coordinates = L.latLng(marker.latitude, marker.longitude);
      L.marker(coordinates)
        .bindPopup(marker.name)
        .addTo(map);
    });
  },

  _onLocationFound: function(e) {
    var radius = e.accuracy / 2;
    var map = this.get('map');

    L.marker(e.latlng, { icon: myIcon }).addTo(map);
    L.circle(e.latlng, radius).addTo(map);
  },

  _onLocationError: function(e) {
    alert(e.message);
  }
});
