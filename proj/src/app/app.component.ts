import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChatService } from './chat.service';
import {Socket} from 'ng-socket-io';

import { Users } from './mock-users';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ChatApp';
  lat: number = 51.678418;
  lng: number = 7.809007;
  users = Users;
  check: number;
  constructor(
    private chat: ChatService,
    private socket: Socket
    ){ }

  ngOnInit() {
    this.socket.on('connect', function(){
      //username = prompt("Please enter your name.");
       console.log('connected to server');
   });
	this.check=0
    for (var i= 0; i <=this.users.length-1; i++){
			if(this.users[i].cur==1){
				this.check=1;
				
			}
		 }
		if (this.check==1){
			document.getElementById("nav1").style.visibility = "hidden";
			document.getElementById("nav2").style.visibility = "visible";
		}
		else{
			document.getElementById("nav2").style.visibility = "hidden";
			document.getElementById("nav1").style.visibility = "visible";
		}
   
  }
  
	refresh(){
		this.check=0
    for (var i= 0; i <=this.users.length-1; i++){
			if(this.users[i].cur==1){
				this.check=1;
				
			}
		 }
		if (this.check==1){
			document.getElementById("nav1").style.visibility = "hidden";
			document.getElementById("nav2").style.visibility = "visible";
		}
		else{
			document.getElementById("nav2").style.visibility = "hidden";
			document.getElementById("nav1").style.visibility = "visible";
		}
	}
  

  sendMessage() {
    this.chat.sendMsg("Test Message");
  }

}