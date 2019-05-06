import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Users } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';


import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
  
})

export class SignUpComponent implements OnInit {
	@ViewChild('input1') input1;
	@ViewChild('input2') input2;
	users = Users;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
	 //UserList= this.getUsers();
  }
  ngAfterViewInit(){
	 // this.input1.nativeElement
  }
	getUsers(): Observable<User[]>{
		//console.log("user list", this.users);
		return of (Users);
	}
  
	addUser(): void{
		var UserList= this.users;
		console.log(UserList);
		let LastUser=UserList[UserList.length-1];
		//alert(LastUser);
		var id= LastUser.id+1;
		var username = this.input1.nativeElement.value;
		var pass = this.input2.nativeElement.value;
		if (/\S/.test(pass)) {
			if(/\S/.test(username)){
				var u=new User (id, username, pass )
				this.messageService.add(`New User added: ${this.input1.nativeElement.value}`);
				Users.push(u);
			}
			else{
			this.messageService.add(`User not added, due to invalid username and/or password`);
			}
		}
		else{
			this.messageService.add(`User not added, due to invalid username and/or password`);
		}
	}
	
	
}
