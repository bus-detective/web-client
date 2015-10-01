import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  type: "LineString",

  route: {
    color: "000000"
  },

  shape: {
    coordinates: [
      [1.2, 2.2],
    ]
  }
});

