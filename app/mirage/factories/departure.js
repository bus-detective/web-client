import Mirage, { faker } from 'ember-cli-mirage';
import moment from 'moment';

export default Mirage.Factory.extend({
  name(i) { return `Stop ${i}`; },
  realtime: true,
  delay: 0,
  time: faker.date.between(moment().subtract(10, 'minutes').toDate(), moment().add(60, 'minutes').toDate()) 
});
