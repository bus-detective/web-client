import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  classNames: 'stop-item',
  favoriteStops: inject.service(),

  isFavorite: Ember.computed('favoriteStops.all', function() {
    return this.get('favoriteStops').hasStop(this.get('stop'));
  }),

  actions: {
    toggleFavorite: function() {
      var favoriteStops = this.get('favoriteStops');

      if (this.get('isFavorite')) {
        favoriteStops.remove(this.get('stop'));
      } else {
        favoriteStops.add(this.get('stop'));
      }
    }
  }
});
