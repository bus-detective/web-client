import Ember from 'ember';
const { computed, Controller } = Ember;
const MAXIMUM_DURATION_IN_HOURS = 12;

export default Controller.extend({
  canLoadMore: computed.lt('model.fetcher.duration', MAXIMUM_DURATION_IN_HOURS)
});
