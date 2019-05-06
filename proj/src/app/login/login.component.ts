import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Users } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';
import {Socket} from 'ng-socket-io';


import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


	@ViewChild('input1') input1;
	@ViewChild('input2') input2;
	users = Users;
	check: number;
  constructor(private messageService: MessageService,
				private socket: Socket) { }

  ngOnInit() {
	 //UserList= this.getUsers();
	 
	
  }

  
	Login(): void{
		/*var UserList= this.users;
		console.log(UserList);
		let LastUser=UserList[UserList.length-1];
		//alert(LastUser);
		var id= LastUser.id+1;*/
		var username = this.input1.nativeElement.value;
		var pass = this.input2.nativeElement.value;
		
		if (/\S/.test(pass)) {
			if(/\S/.test(username)){
				var u=(Users.find(user => user.name === username && user.pass===pass))
				var index= Users.indexOf(u);
				if(index>=0){
						this.check=1;
						 for (var i= 0; i <=this.users.length-1; i++){
							 if (this.users[i].cur==1){
											this.check=0;
										}
						 }
					if (this.check==1){
						Users[index].cur=1;
						this.messageService.add(`Hello ${username}`);
					}
					else{
						this.messageService.add(`Please logout before signing in again`);
					}
					
				}
			
			else{
			this.messageService.add(`Invalid username and/or password`);
			}
		}
		else{
			this.messageService.add(`Invalid username and/or password`);
			}
		}
		else{
			this.messageService.add(`Invalid username and/or password`);
			}
	}
	

}
