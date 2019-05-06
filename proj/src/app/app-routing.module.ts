import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent }   from './dashboard/dashboard.component';
import { RoomsComponent }      from './rooms/rooms.component';
import { RoomDetailComponent }  from './room-detail/room-detail.component';
import { SignUpComponent }  from './sign-up/sign-up.component';
import { DeleteAccountComponent }  from './delete-account/delete-account.component';
import { DeleteRoomComponent }  from './delete-room/delete-room.component';
import { AddRoomComponent }  from './add-room/add-room.component';
import { EditAccountComponent }  from './edit-account/edit-account.component';
import { UserSearchComponent }  from './user-search/user-search.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { LoginComponent }  from './login/login.component';
import { LogoutComponent }  from './logout/logout.component';
import { VideoComponent } from './video/video.component';







const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RoomDetailComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'delete-account', component: DeleteAccountComponent },
  { path: 'delete-room', component: DeleteRoomComponent },
  { path: 'add-room', component: AddRoomComponent },
  { path: 'edit-account', component: EditAccountComponent },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'udetail/:id', component: UserDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {path: 'video-stream', component: VideoComponent}
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 






}
