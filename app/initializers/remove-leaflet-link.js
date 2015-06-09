export function initialize(/* container, application */) {
  L.Control.Attribution.prototype.options.prefix = ' Leaflet';
}

export default {
  name: 'remove-leaflet-link',
  initialize: initialize
};
