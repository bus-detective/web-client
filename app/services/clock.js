import Ember from 'ember';

export default Ember.Service.extend({
  time: new Date,

  setup: Ember.on('init', function() {
    setInterval(function() {
      this.set('time', new Date);
    }.bind(this), 1000);
  })
})
