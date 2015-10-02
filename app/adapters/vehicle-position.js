import DS from 'ember-data';
import Ember from 'ember';
let { inject, on } = Ember;

export default DS.ActiveModelAdapter.extend({
  channel: inject.service(),
  currentChannel: null,

  setupChannel: on('init', function() {
    this.set('currentChannel', this.get('channel').connect('vehiclePosition:agency', "1:trip:32453", {}));

    this.get('currentChannel').onError(function() {});

    this.get('currentChannel').onError(function() {});

    this.get('currentChannel').on("update", (data) => {
      console.log("Received update");
      console.log(data.vehiclePosition);
      this.get('store').push('vehiclePosition', data.vehiclePosition);
    });
  })
});
