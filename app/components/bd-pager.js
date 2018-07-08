import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['pager'],
  page: -1,
  totalPages: -1,

  hasPrevious: computed('page', function() {
    return this.get('page') > 1;
  }),

  hasNext: computed('page', 'totalPages', function() {
    return this.get('page') < this.get('totalPages');
  }),

  isVisible: computed('showPrevious', 'showNext', function() {
    return this.get('showPrevious') || this.get('showNext');
  }),

  actions: {
    backward: function() {
      let page = Math.max(this.get('page') - 1, 1);
      this.sendAction('onPageChange', page);
    },

    forward: function() {
      let page = Math.min(this.get('page') + 1, this.get('totalPages'));
      this.sendAction('onPageChange', page);
    }
  }
});

