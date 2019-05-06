import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Users } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';


import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

	@ViewChild('input1') input1;
	@ViewChild('input2') input2;
	users = Users;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
	 //UserList= this.getUsers();
  }

  
	deleteUser(): void{
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
					Users.splice(index, 1);
					this.messageService.add(`User Account Deleted: ${this.input1.nativeElement.value}`);
				}
			
			else{
			this.messageService.add(`User Acconut not deleted, due to invalid username and/or password`);
			}
		}
		else{
			this.messageService.add(`User Account not deleted, due to invalid username and/or password`);
			}
		}
		else{
			this.messageService.add(`User Account not deleted, due to invalid username and/or password`);
			}
	}
}
