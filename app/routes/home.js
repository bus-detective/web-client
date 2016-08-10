import Ember from 'ember';
const { inject } = Ember;

export default Ember.Route.extend({
  bodyClass: 'bg-primary',
  favoriteStops: inject.service(),
  
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
