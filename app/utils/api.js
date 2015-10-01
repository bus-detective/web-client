import request from 'ic-ajax';
import ENV from 'bus-detective/config/environment';
import { extractOne, wrap } from 'bus-detective/utils/deserializer';

export function stringifyParams(params) {
  return Object.keys(params).map(function(key) {
    return `${key}=${encodeURIComponent(params[key])}`;
  }).join('&');
}

export function searchStops(params) {
  var paramString = stringifyParams(params);
  return request(`${ENV.APP.SERVER}/api/stops?${paramString}`).then(extractOne).then(function(response){
    response.results = response.results.map(wrap);
    return response;
  });
}

export function fetchStop(stopId) {
  return request(`${ENV.APP.SERVER}/api/stops/${stopId}`).then(extractOne);
}

export function fetchDepartures(params) {
  var paramString = stringifyParams({
    stop_id: params.stopId,
    duration: params.duration
  });
  return request(`${ENV.APP.SERVER}/api/departures?${paramString}`).then(extractOne);
}
