import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  tagName: 'a',
  classNameBindings: [':toggle-favorite', 'isFavorite:toggle-favorite--favorite'],
  favoriteStops: inject.service(),

  click: function() {
    var favoriteStops = this.get('favoriteStops');

    if (this.get('isFavorite')) {
      favoriteStops.remove(this.get('stop'));
    } else {
      favoriteStops.add(this.get('stop'));
    }
    return false;
  }, 

  isFavorite: Ember.computed('favoriteStops.all', function() {
    return this.get('favoriteStops').hasStop(this.get('stop'));
  })
});
