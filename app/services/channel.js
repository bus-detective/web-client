import Ember from 'ember';
import { Socket } from '../vendor/phoenix';

export default Ember.Service.extend({
  socket: function(){
    return new Socket("ws://10.20.30.23:4000/ws");
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
