import Leaflet from 'bus-detective/utils/leaflet';
import Ember from 'ember';
let { run } = Ember;
const TILE_URL = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';

export default Ember.Component.extend({
  // Required
  shapes: [],
  lat: null,
  lng: null,

  // Optional
  zoom: 16,

  classNames: ["map"],
  classNameBindings: ["isExpanded:map--expanded"],

  isExpanded: false,
  map: null,
  shapeLayer: null,
  mapOptions: {
    scrollWheelZoom: false,
    zoomControl: false
  },

  didInsertElement() {
    this.configureMap();
  },

  didUpdateAttrs() {
    run.once(this, 'drawShapes');
  },

  willDestroyElement() {
    var map = this.get('map');
    if (map) { map.remove(); }
  },

  configureMap() {
    let center = [this.get('lat'), this.get('lng')];
    this.set('map', Leaflet.map(this.get('element'), this.get('mapOptions')));
    this.get('map').setView(center, this.get('zoom'));
    this.get('map').addLayer(Leaflet.tileLayer(TILE_URL, { detectRetina: true}));
    this.set('shapeLayer', Leaflet.layerGroup().addTo(this.get('map')));
    Leaflet.marker(center).addTo(this.get('map'));
  },

  drawShapes() {
    this.get('shapeLayer').clearLayers();

    let shapes = this.get('shapes').map((shape) => {
      return Leaflet.polyline(shape.get('coordinates'), { color: `#${shape.get('color')}` });
    });

    this.get('shapeLayer').addLayer(Leaflet.layerGroup(shapes));
  },

  actions: {
    toggleExpanded() {
      this.toggleProperty('isExpanded');
      run.next(() => this.get('map').invalidateSize());
    }
  }
});
