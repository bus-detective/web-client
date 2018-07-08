import { run } from '@ember/runloop';
import { on } from '@ember/object/evented';
import Service from '@ember/service';

export default Service.extend({
  time: new Date(),

  setup: on('init', function() {
    var service = this;

    setInterval(function() {
      run(function() {
        service.set('time', new Date());
      });
    }, 1000);
  })
});
