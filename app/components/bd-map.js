import Leaflet from 'bus-detective/utils/leaflet';
import Ember from 'ember';
let { run } = Ember;

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
    let center = Leaflet.latLng(this.get('lat'), this.get('lng'));

    let tileLayer = Leaflet.tileLayer('https://api.mapbox.com/v4/{style}/{z}/{x}/{y}{format}?access_token={token}', {
      detectRetina: true,
      format: '@2x.png',
      style: 'mapbox.emerald',
      token: 'pk.eyJ1IjoiY2Rtd2VicyIsImEiOiJjaWZvcmg2NnE1M293czNrcW5jMXZyend0In0.Evu7AuaMSVBQIvN7j1QtnQ'
    });
    let shapeLayer = Leaflet.layerGroup();
    let markerLayer = Leaflet.marker(center);

    let mapOptions = {
      scrollWheelZoom: false,
      zoomControl: false,
      center: center,
      zoom: 16
    };

    let map = Leaflet.map(this.get('element'), mapOptions);

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
