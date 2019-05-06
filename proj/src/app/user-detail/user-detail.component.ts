import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { User } from '../user';
import { UserService }  from '../user.service';

import {Observable} from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { share } from "rxjs/operators";   // lettable operator, tree-shakeable
import { filter } from "rxjs/operators";
import {ChatService} from '../chat.service';
import {Socket} from 'ng-socket-io';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   user: User;
	msg="";
	@ViewChild ('chat') chat;
	
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
	private chatService : ChatService,
	private socket: Socket
  ) {}
 
  ngOnInit(): void {
    this.getUser();
		this.socket.on('message',(data)=>{this.chat.nativeElement.append("\n"+data.text);});
  }
 
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
 
  sendMsg(msg){
    this.chatService.sendMsg(msg);
	 	//this.chatService.getMsg().subscribe(msg => {this.msg = msg;});
	this.chat.nativeElement.append(document.createElement("br"));
  }
 
  goBack(): void {
    this.location.back();
  }
}
