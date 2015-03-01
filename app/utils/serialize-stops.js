export default function serializeStops(response) {
  return response.stops.map(function(stop) {
    return {
      id: stop.stop_id,
      name: stop.stop_name
    };
  });
}
