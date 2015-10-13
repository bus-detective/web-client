import Leaflet from 'bus-detective/utils/leaflet';
import Ember from 'ember';
let { run } = Ember;
const TILE_URL = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';

export default Ember.Component.extend({
  shapes: [],
  lat: null,
  lng: null,
  isExpanded: false,
  map: null,
  shapeLayer: null,

  classNames: ["map"],
  classNameBindings: ["isExpanded:map--expanded"],

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
    let center = L.latLng(this.get('lat'), this.get('lng'));

    let tileLayer = L.tileLayer(TILE_URL, { detectRetina: true });
    let shapeLayer = L.layerGroup();
    let markerLayer = L.marker(center);

    let mapOptions = {
      scrollWheelZoom: false,
      zoomControl: false,
      center: center,
      zoom: 16
    };

    let map = L.map(this.get('element'), mapOptions);

    map
      .addLayer(tileLayer)
      .addLayer(shapeLayer)
      .addLayer(markerLayer);

    this.set('map', map);
    this.set('shapeLayer', shapeLayer);
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
