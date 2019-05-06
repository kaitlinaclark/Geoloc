import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Users } from '../mock-users';
import { User } from '../user';
import { UserService } from '../user.service';


import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

	@ViewChild('input1') input1;
	@ViewChild('input2') input2;
	@ViewChild('input3') input3;
	@ViewChild('input4') input4;
	users = Users;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  
	editUser(): void{

		var originalUsername = this.input1.nativeElement.value;
		var originalPass = this.input2.nativeElement.value;
		var newUsername = this.input3.nativeElement.value;
		var newPass = this.input4.nativeElement.value;
		
		if (originalPass!=newPass){
	
					var u=(Users.find(user => user.name === originalUsername && user.pass===originalPass))
					var index= Users.indexOf(u);
					if(index>=0){
						Users[index].name=newUsername;
						Users[index].pass=newPass;
						this.messageService.add(`User Account Succesfully updated`);
					}
				
				else{
				this.messageService.add(`User Acconut Could not be edited due to incorrect original username and/or password`);
				}			
		}
		else{
			this.messageService.add(`Your new password cannont be the same as your old password`);
		}
	}
}
