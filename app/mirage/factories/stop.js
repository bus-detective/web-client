import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Stop ${i}`; },
  latitude: faker.address.latitude,
  longitude: faker.address.longitude
});
