import request from 'ic-ajax';
import ENV from 'bus-detective/config/environment';
import { extractSearchResult } from 'bus-detective/utils/deserializer';

export function searchStops(params) {
  var paramStrings = Object.keys(params).map(function(key) { 
    return `${key}=${params[key]}`;
  });
  return request(`${ENV.APP.SERVER}/api/stops?${paramStrings.join('&')}`).then(extractSearchResult);
}

export function fetchArrivalsByStopId(stopId) {
  return request(`${ENV.APP.SERVER}/api/arrivals/${stopId}`).then(function(response) {
    return response.arrivals;
  });
}
