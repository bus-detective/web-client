import Route from '@ember/routing/route';
import { fetchStop } from 'bus-detective/utils/api';

export default Route.extend({
  model: function(params) {
    return fetchStop(params.stop_id);
  }
});
