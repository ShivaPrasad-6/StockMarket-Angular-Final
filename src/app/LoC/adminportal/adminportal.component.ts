import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  constructor(private navbar:NavbarService){ }
  isnavshow:boolean;
  ngOnInit() {
    alert("adminportal");
    this.isnavshow=this.navbar.IsLoggedin();
    alert(this.isnavshow);
  }

  
}
