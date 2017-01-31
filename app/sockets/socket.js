/*
 *  This is a simple wrapper around a Socket utility Class Object that acts as a simple event emitter between the server and the client.
 * Import Node event emitter. It provides a nice pattern for event based message passing. For more info see - https://github.com/MarcZenn/simple-JS-event-emitter
*/
import {EventEmitter} from 'events';

// Socket Instance
class Socket {
  constructor(ws = new WebSocket(), ee = new EventEmitter()){
    this.ws = ws;
    this.ee = ee;
    ws.onmessage = this.upload.bind(this); // callbacks
    ws.onOpen = this.open.bind(this);
    ws.onClose = this.close.bind(this);
  }

  // Client to Server
  on(name, fn){
    this.ee.on(name, fn);
  }
  off(name, fn){
    this.ee.removeListener(name, fn);
  }
  emit(name, data) {
    const upload = JSON.stringify({name, data});
    this.ws.send(upload);
  }

  // Server to Client
  upload(e) {
    try{
      const upload = JSON.parse(e.data);
      this.ee.emit(upload.name ,upload.data);
    }
    catch(err){
      this.ee.emit('error', err);
    }
  }
  open(){
    this.ee.emit('connect');
  }
  close(){
    this.ee.emit('disconnect');
  }
}

export default Socket;
