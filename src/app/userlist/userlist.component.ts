import { Component, OnInit } from '@angular/core';

import { UserserviceService } from '../LoC/signup/userservice.service';

import { User } from '../LoC/signup/user';

import { FormGroup, FormControl } from '@angular/forms';


import { Observable } from 'rxjs/internal/Observable';

import { Router } from '@angular/router';


@Component({

  selector: 'app-userlist',

  templateUrl: './userlist.component.html',

  styleUrls: ['./userlist.component.css']

})

export class UserListComponent implements OnInit {
  
  isupdated: boolean;
  


  constructor(private router: Router,private userservice: UserserviceService) { }


  userList: Observable<User[]>;

  ngOnInit() {
 
   this.userservice.getAllUsers().subscribe(data => {
 
    this.userList = data;
 
   });
  }

  deleteUser(user : User ) {  
    this.userservice.deleteUser(user.username)  
      .subscribe(  
        data => {  
          this.userservice.getAllUsers().subscribe(data =>{  
            this.userList =data;   
            });
        }) ;
  };

  updateUser(user : User ) {  
    
    window.localStorage.removeItem("edit-username");
    window.localStorage.setItem("edit-username", user.username.toString());
    this.router.navigate(['signup']);
    };


}