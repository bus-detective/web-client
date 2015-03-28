import request from 'ic-ajax';
import ENV from 'bus-detective/config/environment';
import serializeStops from 'bus-detective/utils/serialize-stops';

export function searchStops(params) {
  var paramStrings = Object.keys(params).map(function(key) { 
    return `${key}=${params[key]}`;
  });
  return request(`${ENV.APP.SERVER}/api/stops?${paramStrings.join('&')}`).then(serializeStops);
}

export function fetchArrivalsByStopId(stopId) {
  return request(`${ENV.APP.SERVER}/api/arrivals/${stopId}`).then(function(response) {
    return response.arrivals;
  });
}
