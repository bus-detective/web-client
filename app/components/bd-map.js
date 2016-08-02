import Leaflet from 'bus-detective/utils/leaflet';
import Ember from 'ember';
let { run } = Ember;
const TILE_URL = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
const { ObjectProxy } = Ember;

export default Ember.Component.extend({
  // Required
  trips: [],
  lat: null,
  lng: null,
  vehiclePositions: {},
  vehicleMarkers: {},

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
    run.once(this, 'drawVehicles');
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

  drawVehicles() {
    let positions = this.get('vehiclePositions');
    let markers = this.get('vehicleMarkers');
    Object.keys(positions).forEach((remoteVehicleId) => {
      let vehicle = positions[remoteVehicleId];
      let vehicleMarker = markers[remoteVehicleId];
      if (!vehicleMarker) {
        vehicleMarker = this.createVehicleMarker(vehicle);
        markers[remoteVehicleId] = vehicleMarker;
        vehicleMarker.addTo(this.get('map'));
      } else {
        let coords = Leaflet.latLng(vehicle.lat, vehicle.lng);
        vehicleMarker.addDestination(coords);
      }
      vehicleMarker.update();
    });
  },

  drawShapes() {
    this.get('shapeLayer').clearLayers();

    let shapes = this.get('trips').map((trip) => {
      return ObjectProxy.create({ 
        content: trip.shape,
        color: trip.route.color,
        trip_remote_id: trip.remote_id,
        headsign: trip.headsign
      });
    });

    let mapShapes = shapes.map((shape) => {
      return Leaflet.polyline(shape.get('coordinates'), { color: `#${shape.get('color')}` });
    });

    this.get('shapeLayer').addLayer(Leaflet.layerGroup(mapShapes));
  },

  createVehicleMarker(vehicle) {
    let trip = this.get('trips').findBy('remote_id', vehicle.trip_remote_id);
    let coordinates = trip ? trip.shape.coordinates : [];
    let headsign = trip ? trip.headsign : "";
    let vehicleIcon = Leaflet.icon({
      iconUrl: 'images/bus-detective-icon.png',
      iconSize: [50,50]
    });
    return Leaflet.vehicleMarker([vehicle.lat, vehicle.lng], {
      shape: coordinates,
      icon: vehicleIcon,
      title: headsign
    });
  },

  actions: {
    toggleExpanded() {
      this.toggleProperty('isExpanded');
      run.next(() => this.get('map').invalidateSize());
    }
  }
});
