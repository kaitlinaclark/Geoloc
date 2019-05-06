import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { UserSearchComponent } from './user-search/user-search.component';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import {ChatService} from './chat.service';
import { LogoutComponent } from './logout/logout.component';
import { VideoComponent } from './video/video.component';
import { MainComponent } from './main/main.component';


const config: SocketIoConfig = {
  url: 'https://localhost:3456/',
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    UsersComponent,
    MessagesComponent,
    DashboardComponent,
    RoomSearchComponent,
    RoomDetailComponent,
    UserDetailComponent,
    SignUpComponent,
    LoginComponent,
    DeleteAccountComponent,
    DeleteRoomComponent,
    AddRoomComponent,
    EditAccountComponent,
    UserSearchComponent,
    LogoutComponent,
    VideoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule,
	SocketIoModule.forRoot(config),
	HttpClientModule,
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
