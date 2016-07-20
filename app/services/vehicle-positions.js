import Ember from 'ember';
const { inject, run } = Ember;

export default Ember.Service.extend(Ember.Evented, {
  channel: inject.service(),
  subscriptions: {},
  positions: Ember.Map.create(),
  stop: null,
  vehiclePositions: {},

  init(stop) {
    this.set('stop', stop);
  },

  setTripIds(ids) {
    ids.forEach(tripId => {
      let subscriptions = this.get('subscriptions');
      if (!subscriptions[tripId]) {
        this.subscribe(tripId);
      }
    });
  },
  
  subscribe(tripId) {
    let key = this.getKey(tripId);
    let chan = this.get('channel').connect('vehiclePosition:agency', key);
    let subscriptions = this.get('subscriptions');
    subscriptions[tripId] = chan;
    this.set('subscriptions', subscriptions);
    chan.on('vehiclePosition:update', data => {
      this.updateVehiclePosition(data);
      run.debounce(this, 'emitPositions', 500);
    });
  },

  unsubscribeAll() {
    let tripIds = Object.keys(this.get('subscriptions'));
    tripIds.forEach((tripId) => {
      this.unsubscribe(tripId);
    });
  },

  unsubscribe(tripId) {
    let subscriptions = this.get('subscriptions');
    let chan = subscriptions[tripId];
    chan.leave();
    delete subscriptions[tripId];
    this.set('subscriptions', subscriptions);
  },

  getKey(tripId) {
    let agencyId = this.get('stop.agency.id');
    return `${agencyId}:trip:${tripId}`;
  },

  emitPositions() {
    this.trigger('update', this.get('vehiclePositions'));
  },
  
  updateVehiclePosition(positionData) {
    let vehicleId = positionData.vehicle_remote_id;
    this.get('vehiclePositions')[vehicleId] = positionData;
  }
  
});
