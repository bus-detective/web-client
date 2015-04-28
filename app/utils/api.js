import request from 'ic-ajax';
import ENV from 'bus-detective/config/environment';
import { extractOne, wrap } from 'bus-detective/utils/deserializer';

var stringifyParams = function(params) {
  return Object.keys(params).map(function(key) { 
    return `${key}=${params[key]}`;
  }).join('&');
};

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

export function fetchDepartures(stopId) {
  var paramString = stringifyParams({ stop_id: stopId });
  return request(`${ENV.APP.SERVER}/api/departures?${paramString}`).then(extractOne);
}
