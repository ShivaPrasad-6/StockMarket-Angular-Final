import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ac4 } from '../ac4/ac4';
import { Ac4Service } from '../ac4/ac4.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ac1',
  templateUrl: './ac1.component.html',
  styleUrls: ['./ac1.component.css']
})
export class Ac1Component implements OnInit {
  
  

  constructor(private ac4service:Ac4Service,private router: Router) { }
  selectedFiles: FileList; 
  ipodetails : Ac4 =new Ac4(); 
  submitted = false;
  currentfileUpload:File;

  ngOnInit() {
  }

  uploadfileform=new FormGroup({
    uploadfile:new FormControl()
  
 });


  selectFile(event) {  
    const file = event.target.files.item(0);  
   
    if (file.type.match('image.*')) {  
      var size = event.target.files[0].size;  
      if(size > 1000000)  
      {  
          alert("size must not exceeds 1 MB");  
          this.uploadfileform.get('uploadfile').setValue("");  
      }  
      else  
      {  
        this.selectedFiles = event.target.files;  
      }  
    } else {  
      alert('invalid format!');  
    }  
  } 


  saveIpos(saveIpos){
    if(this.uploadfileform.invalid){
      alert("Invalid Form");
    }
    else{
    this.ipodetails=new Ac4();
    this.ipodetails.uploadfile=this.Uploadfile.value;
    this.submitted = true;
    this.save();
    }
  }

  save() {
    this.currentfileUpload=this.selectedFiles.item(0);
    this.ac4service.uploadFile(this.currentfileUpload)
     .subscribe(data => console.log(data), error => console.log(error));
    this.ipodetails = new Ac4();
    window.localStorage.removeItem("edit-ipoid");
    alert("file uploaded successfully");
    this.router.navigate(['ac1']);
   }

  get Uploadfile(){
    return this.uploadfileform.get('uploadfile');
  }

}
