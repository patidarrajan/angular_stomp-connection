import { Component } from '@angular/core';
import { StompConnectService } from './stomp-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logsTexts: any;
  connectionUrl: string = 'ws://xyz.com';
  subscribeUrl: string = '/topic/xyz';
  constructor(public service: StompConnectService) { 
    this.logsTexts = [];
  }

  /**
    * connect and subscribe stomp 
    */
  ngOnInit() {
    this.service.connectAndSubscribe(this, this.connectionUrl, this.subscribeUrl);
  }
}
