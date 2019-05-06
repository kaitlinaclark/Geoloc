//sends messages to socket service
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
//import { share } from "rxjs/operator/share";
import {Socket} from 'ng-socket-io';

//add map operator
import {map} from 'rxjs/operators';


@Injectable()
export class ChatService {
  msg: string;
  // Our constructor calls our socketService connect method
  constructor(private socket: Socket) {}
  
  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg: string) {
    this.socket.emit('message', msg);
  }

  /*getMsg(){
    return this.socket
              .fromEvent<any>('message')
              map(data => data.msg);
  }*/
  close(){
    this.socket.disconnect()
  }

}