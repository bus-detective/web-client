import request from 'ic-ajax';
import ENV from 'bus-detective/config/environment';
import serializeStops from 'bus-detective/utils/serialize-stops';

export function searchStops(name) {
  return request(`${ENV.APP.SERVER}/api/stops?name=${name}`).then(serializeStops);
}

export function fetchArrivalsByStopId(stopId) {
  return request(`${ENV.APP.SERVER}/api/arrivals/${stopId}`).then(function(response) {
    return response.arrivals;
  });
}
