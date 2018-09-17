import { Injectable } from '@angular/core';
import Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class StompConnectService {

  ws: any;

  constructor() { }

  connectAndSubscribe(that:any, stompConnectionUrl: string, topicSubscription: string) {
    let temp=this;
    console.log("<< stomp connecting >>");
    const socket = new WebSocket(stompConnectionUrl);
    this.ws = Stomp.over(socket);
    this.ws.connect({});
    console.log("<< stomp connected >>");
    setTimeout(()=>{  this.subscribe(that, topicSubscription); }, 2000);
  }

  disconnect() {
    console.log("<< stomp diconnecting >>");
    if (this.ws != null) {
      this.ws.close();
    }
    console.log("<< stomp disconnected >>");
  }
  
  subscribe(that:any, topicSubscription: string) {
    console.log(topicSubscription);
    this.ws.subscribe(topicSubscription, function (message) {
      console.log("Stomp Message Received");
      const json = JSON.parse(message.body);
      that.logsTexts.push(JSON.stringify(json));
      console.log(json);
    });
  }

}
