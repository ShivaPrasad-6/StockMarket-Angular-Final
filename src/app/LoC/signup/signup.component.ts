import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { UserserviceService } from 'src/app/LoC/signup/userservice.service';
import { User } from 'src/app/LoC/signup/user';

@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor(private userservice:UserserviceService) { }
  user : User=new User();
  submitted = false;

 ngOnInit() {
  this.submitted=false;
 }

 usersaveform=new FormGroup({
  username:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  email:new FormControl('',[Validators.required,Validators.email]),
  mobile:new FormControl('',[Validators.required]),
  confirm:new FormControl()
 });

 saveUser(saveUser){
  this.user=new User();
  this.user.username=this.Username.value;
  this.user.password=this.Password.value;
  this.user.email=this.Email.value;
  this.user.mobile=this.Mobile.value;
  this.user.confirm=this.Confirm.value;
  this.submitted = true;
  this.save();
 }

 save() {
  this.userservice.saveUser(this.user)
   .subscribe(data => console.log(data), error => console.log(error));
  this.user = new User();
 }

 get Username(){
  return this.usersaveform.get('username');
 }

 get Email(){
  return this.usersaveform.get('email');
 }

 get Mobile(){
  return this.usersaveform.get('mobile');
 }

 get Password(){
  return this.usersaveform.get('password');
 }
 get Confirm(){
  return this.usersaveform.get('confirm');
 }

 saveuserForm(){
  this.submitted=false;
  this.usersaveform.reset();
 }
 
}

