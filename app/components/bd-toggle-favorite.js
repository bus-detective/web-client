import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNameBindings: [':toggle-favorite', 'isFavorite:toggle-favorite--favorite'],
  favoriteStops: service(),

  click: function() {
    var favoriteStops = this.get('favoriteStops');

    if (this.get('isFavorite')) {
      favoriteStops.remove(this.get('stop'));
    } else {
      favoriteStops.add(this.get('stop'));
    }
    return false;
  },

  isFavorite: computed('favoriteStops.all', function() {
    return this.get('favoriteStops').hasStop(this.get('stop'));
  })
});
