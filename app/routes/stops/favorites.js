import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Route.extend({
  favoriteStops: inject.service(),

  model() {
    return this.get('favoriteStops');
  },

  actions: {
    reorderFavorites(favorites) {
       this.get('favoriteStops').replaceStops(favorites);
    }
  }
});
