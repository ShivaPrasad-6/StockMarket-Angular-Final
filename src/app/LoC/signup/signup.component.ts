import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { UserserviceService } from 'src/app/LoC/signup/userservice.service';
import { User } from 'src/app/LoC/signup/user';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';



@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor(private router: Router,private userservice:UserserviceService) { }

  user : User= new User();
  selectedFiles: FileList;  
  submitted = false;

 ngOnInit() {
    var username=window.localStorage.getItem("edit-username");
    if(username!=null && username !=""){
    this.userservice.findOneInAll6(username)  
        .subscribe(  
          data => {  
            this.user = data;  
            this.usersaveform.setValue(this.user);
          }) ;
        
  this.submitted=false;
 }
}


 selectFile(event) {  
  const file = event.target.files.item(0);  
 
  if (file.type.match('image.*')) {  
    var size = event.target.files[0].size;  
    if(size > 1000000)  
    {  
        alert("size must not exceeds 1 MB");  
        this.usersaveform.get('profileimage').setValue("");  
    }  
    else  
    {  
      this.selectedFiles = event.target.files;  
    }  
  } else {  
    alert('invalid format!');  
  }  
} 



 usersaveform=new FormGroup({
  username:new FormControl('', [Validators.required , Validators.minLength(5) ] ),
  password:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
  email:new FormControl('',[Validators.required,Validators.email]),
  phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
  profileimage : new FormControl(),
  confirm:new FormControl(),
  usertype:new FormControl()
  
 });



 saveUser(saveUser){
   if(this.usersaveform.invalid){
     alert("Invalid Form");
   }
   else{
  this.user=new User();
  this.user.username=this.Username.value;
  this.user.password=this.Password.value;
  this.user.email=this.Email.value;
  this.user.phone=this.Phone.value;
  this.user.confirm="no";
  this.user.usertype="user";
  this.user.profileimage=this.Profileimage.value;
  this.submitted = true;
  this.save();
   }
 }

 save() {
  this.userservice.saveUser(this.user)
   .subscribe(data => console.log(data), error => console.log(error));
  this.user = new User();
  window.localStorage.removeItem("edit-username");
  this.router.navigate(['login']);
 }

 get Username(){
  return this.usersaveform.get('username');
 }

 get Email(){
  return this.usersaveform.get('email');
 }

 get Phone(){
  return this.usersaveform.get('phone');
 }

 get Password(){
  return this.usersaveform.get('password');
 }
 get Confirm(){
  return this.usersaveform.get('confirm');
 }
 get Usertype(){
  return this.usersaveform.get('usertype');
 }
 get Profileimage(){
   return this.usersaveform.get('profileimage');
 }

 saveuserForm(){
  this.submitted=false;
  this.usersaveform.reset();
 }
 
}

