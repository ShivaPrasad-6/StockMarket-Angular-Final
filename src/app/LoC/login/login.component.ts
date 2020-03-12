import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../signup/userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../signup/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNew: User = new User();



  constructor(private router: Router, private userserviceservice: UserserviceService) { }
  user: User = new User();

  submitted = false;

  ngOnInit() {



    this.submitted = false;



  }



  usersaveform = new FormGroup({



    //id: new FormControl('', [Validators.required, Validators.maxLength(5)]),



    username: new FormControl('', [Validators.required, Validators.minLength(5)]),



    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),



    //email: new FormControl('', [Validators.required, Validators.email]),



    //contact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),



    //userType: new FormControl('', [Validators.required]),



    //confirmed: new FormControl('', [Validators.required])



  })



  saveUser(saveuser) {



    this.user = new User();



    // this.user.id = this.usersaveform.get('id').value;



    //console.log(this.user.id);



    this.user.username = this.usersaveform.get('username').value;



    this.user.password = this.usersaveform.get('password').value;



    // this.user.email = this.usersaveform.get('email').value;



    // this.user.contact = this.usersaveform.get('contact').value;



    // console.log(this.user.contact);



    //this.user.userType = this.usersaveform.get('userType').value;



    //this.user.confirmed = this.usersaveform.get('confirmed').value;



    //console.log(this.user.confirmed);



    //this.submitted = false;



    this.userserviceservice.findByUsernameAndPassword(this.user.username, this.user.password).subscribe(data => {



      this.userNew = data;



      if (this.userNew != null && this.userNew.usertype == 'admin') {



        this.router.navigate(['admin-portal']);



      }



      else if (this.userNew != null && this.userNew.usertype == 'user') {



        this.router.navigate(['user-portal']);



      }

      else {

        alert("invalid login");



        this.router.navigate(['login']);



      }
    },
      error => console.log(console.error()));
  }

}

