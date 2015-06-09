/*globals L */

export function initialize() {
  L.Control.Attribution.prototype.options.prefix = ' Leaflet';
}

export default {
  name: 'remove-leaflet-link',
  initialize: initialize
};
