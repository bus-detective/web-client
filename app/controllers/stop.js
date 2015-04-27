import Ember from 'ember';

export default Ember.Controller.extend({
  markers: Ember.computed('model', function() {
    return [{ 
      title: this.get('model.name'),
      lat: this.get('model.latitude'),
      lng: this.get('model.longitude')
    }];
  })
});
