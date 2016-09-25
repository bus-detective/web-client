/*globals L */
import ENV from 'bus-detective/config/environment';

export function initialize() {
  L.Control.Attribution.prototype.options.prefix = ' Leaflet';
  L.Icon.Default.imagePath = ENV.cdnHost ? `https://${ENV.cdnHost}` : '' + '/assets/images';
}

export default {
  name: 'leaflet',
  initialize: initialize
};
