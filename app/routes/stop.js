import Ember from 'ember';
import { fetchStop, searchShapes } from 'bus-detective/utils/api';
let { run } = Ember;

export default Ember.Route.extend({
  model: function(params) {
    return fetchStop(params.stop_id);
  },

  handleShapeFetchSuccess(response) {
    this.set('controller.shapes', response.results)
  },

  actions: {
    departuresDidUpdate(departures) {
      let shapeIds = departures.mapBy('trip.shape_id').uniq();
      searchShapes({ ids: shapeIds }).then(run.bind(this, 'handleShapeFetchSuccess'))
    }
  }
});
