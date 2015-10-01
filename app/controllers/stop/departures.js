import Ember from 'ember';
const { computed, Controller } = Ember;
const MAXIMUM_END_TIME_OFFSET = 12;

export default Controller.extend({
  canLoadMore: computed.lt('model.fetcher.endTimeOffset', MAXIMUM_END_TIME_OFFSET)
});
