import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  bodyClass: 'bg-primary',
  favoriteStops: service(),

  setupController(controller, model) {
    this._super(controller, model);
    let favoriteStops = this.get('favoriteStops');
    controller.set('favoriteStops', favoriteStops);
  },

  actions: {
    reorderFavorites(favorites) {
       this.get('favoriteStops').replaceStops(favorites);
    }
  }
});
