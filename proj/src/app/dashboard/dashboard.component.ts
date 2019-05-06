import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  rooms: Room[] = [];
  constructor(private roomService: RoomService, private messageService: MessageService) { }

  ngOnInit() {
    this.getRooms();

  }

  getRooms(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.rooms = rooms.slice(1, 5));
  }
}