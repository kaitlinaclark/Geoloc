import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Users } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';
import {Socket} from 'ng-socket-io';


import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

	users = Users;
  constructor(private messageService: MessageService,
				private socket: Socket) { }

  ngOnInit() {
	 //UserList= this.getUsers();
	 
	
  }

  
	Logout(): void{

		 for (var i= 0; i <=this.users.length-1; i++){
			this.users[i].cur=0;
		 }
		this.messageService.add(`You have been logged out`);

	}
	


}
