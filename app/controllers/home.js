import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  topFavorites: computed('favoriteStops.all', function () {
    return this.get('favoriteStops.all').slice(0,5);
  })
});
