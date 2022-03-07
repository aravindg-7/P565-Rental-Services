import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,private authService:AuthserviceService) { }
  isLoggedIn:boolean = false
  loggedInuser:string = "";
  ngOnInit(): void {
  }
  loggedIn():boolean {
    if(this.authService.loggedIn){
      this.isLoggedIn = true;
      this.loggedInuser = this.authService.loggedInUser;
      return true
    }
    else{
      this.isLoggedIn = false;
      return false;
    }
  }
  clicked(){
    this.authService.logout();
  }

}
