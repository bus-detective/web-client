import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  favoriteStops: service(),

  model() {
    return this.get('favoriteStops');
  },

  actions: {
    reorderFavorites(favorites) {
       this.get('favoriteStops').replaceStops(favorites);
    }
  }
});
