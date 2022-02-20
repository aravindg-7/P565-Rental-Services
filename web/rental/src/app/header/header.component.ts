import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isLoggedIn:boolean = false
  ngOnInit(): void {
  }
  loggedIn():boolean {
      this.isLoggedIn = false;
      return false
    }
  clicked(){
    // this.foodService.clickedOnAdd = false;
    // this.foodService.addedToCart = false;
  }

}
