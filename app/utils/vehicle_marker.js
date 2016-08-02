import turfPoint from 'npm:turf-point';
import pointOnLine from 'npm:turf-point-on-line';
import lineSlice from 'npm:turf-line-slice';

let L = window.L;

const DEFAULT_INTERVAL = 2000;

L.VehicleMarker = L.AnimatedMarker.extend({
  options: {
    interval: 5500,
    onEnd: function() {
      //console.log('ended');
      //this.start();
      //this.animating = false;
      //delete this.poll;
      //this.pollForDestinations();
    }
  },

  initialize(latlng, options) {
    this.poll = null;
    this.animating = false;
    this.destinationQueue = [];
    this.setLine([latlng]);
    this.on('remove', function() {
      delete this.poll;
    });
    L.Marker.prototype.initialize.call(this, latlng, options);
    this.addDestination(L.latLng(latlng[0], latlng[1]));
  },
  
  addDestination(latlng) {
    this.stop();
    let distance = latlng.distanceTo(this.getLatLng());
    if (distance === 0 || isNaN(distance)) return;
    console.log(this.options.title, distance);
    //this.destinationQueue.push({ coords: latlng, interval: interval });
    this.latestDestination = { coords: latlng };
    this.pollForDestinations();
    this.start();
  },

  pollForDestinations() {
    //this.stop();
    //let dest = this.destinationQueue.shift();
    let dest = this.latestDestination;
    let segment = this.getSegment(this.getLatLng(), dest, this.options.shape);
    console.log(segment);
    let segCoords = segment.geometry.coordinates.map((c) => {
      return [c[1], c[0]];
    });
    let leafletSeg = L.polyline(segCoords).getLatLngs();
    this.setLine(leafletSeg);
    //this.options.interval = 30000;
  },

  getSegment(src, dest, shape) {
    var line = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": shape.map(function (s) { 
          return [s[1], s[0]]; 
        })
      }
    };
    var start = turfPoint([src.lng, src.lat]);
    var stop = pointOnLine(line, turfPoint([dest.coords.lng, dest.coords.lat]));
    return lineSlice(start, stop, line);
  }
});

L.vehicleMarker = function (latlngs, options) {
  return new L.VehicleMarker(latlngs, options);
};
