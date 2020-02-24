import { Component, OnInit } from '@angular/core';

import { UserserviceService } from '../LoC/signup/userservice.service';

import { User } from '../LoC/signup/user';

import { FormGroup, FormControl } from '@angular/forms';


import { Observable } from 'rxjs/internal/Observable';



@Component({

  selector: 'app-userlist',

  templateUrl: './userlist.component.html',

  styleUrls: ['./userlist.component.css']

})

export class UserListComponent implements OnInit {
  
  isupdated: boolean;


  constructor(private userservice: UserserviceService) { }


  userList: Observable<User[]>;

  ngOnInit() {
 
   this.userservice.getAllUsers().subscribe(data => {
 
    this.userList = data;
 
   });
  }
}