import Ember from 'ember';
import ENV from 'bus-detective/config/environment';
import { Socket } from 'bus-detective/vendor/phoenix';

export default Ember.Service.extend({
  socket: function(){
    return new Socket(ENV.APP.REALTIME_SERVER);
  },

  connect: function(channel, topic, initialPayload={}){
    let socket = this.socket();
    socket.connect();
    let chan = socket.channel(`${channel}:${topic}`, initialPayload);

    chan.join().receive("ok", () => {
      console.log("Success!");
    });
    return chan;
  }
});
