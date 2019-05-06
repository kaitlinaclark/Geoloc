import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user/user.component';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    //get user username from url
    const username = +this.route.snapshot.paramMap.get('name');
  }

}
