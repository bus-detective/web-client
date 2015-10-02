export function initialize(application) {
  application.container.lookup('service:history');
}

export default {
  name: 'boot-history',
  initialize: initialize
};
