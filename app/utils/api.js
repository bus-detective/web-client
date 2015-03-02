import request from 'ic-ajax';
import ENV from 'realtime-metro-web-client/config/environment';
import serializeStops from 'realtime-metro-web-client/utils/serialize-stops';

export function searchStops(name) {
  return request(`${ENV.APP.SERVER}/api/stops?name=${name}`).then(serializeStops);
}
