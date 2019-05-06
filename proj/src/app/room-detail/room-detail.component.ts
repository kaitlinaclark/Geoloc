import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Room } from '../room';
import { RoomService }  from '../room.service';
import {Observable} from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { share } from "rxjs/operators";   // lettable operator, tree-shakeable
import { filter } from "rxjs/operators";
import {ChatService} from '../chat.service';
import {Socket} from 'ng-socket-io';


@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css'],
  providers : [ChatService]
})
export class RoomDetailComponent implements OnInit {
  room: Room;
	msg="";
	@ViewChild ('chat') chat;
  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private location: Location,
	private chatService : ChatService,
	private socket: Socket
  ) {}
 
  ngOnInit(): void {
    this.getRoom();
	this.socket.on('message',(data)=>{this.chat.nativeElement.append("\n"+data.text);});
	//this.chat.nativeElement.append(document.createElement("br"));

  }
 
  getRoom(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id)
      .subscribe(room => this.room = room);
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
