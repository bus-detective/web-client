import Ember from 'ember';

export default Ember.Service.extend({
  time: new Date(),

  setup: Ember.on('init', function() {
    var service = this;

    setInterval(function() {
      Ember.run(function() {
        service.set('time', new Date());
      });
    }, 1000);
  })
});
