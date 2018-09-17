import { Component } from '@angular/core';
import { StompConnectService } from './stomp-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logsTexts: any;
  connectionUrl: string = 'ws://10.103.3.17:8081/vms-cloud/stomp';
  subscribeUrl: string = '/topic/instance-update/5';
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
