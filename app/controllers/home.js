import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  topFavorites: computed('favoriteStops.all.[]', function () {
    return this.get('favoriteStops.all').slice(0,5);
  })
});
