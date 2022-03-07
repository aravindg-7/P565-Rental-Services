import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { product } from '../product';
import { SearchserviceService } from '../searchservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SearchKey:string = "";
  productList: product[] = [];
  loggedIn:boolean = false;
  RateKey:number = 0;
  searchText:string = "";

  constructor(public router: Router,private authService:AuthserviceService, private searchservice:SearchserviceService) {
    if(authService.loggedIn)
    {
      this.loggedIn = true;
    }
   }

  ngOnInit(): void {
    this.searchservice.getProducts().subscribe({
      next: (data)=>{
        this.productList = data;
        // console.log(data)  
      },
      error: (error)=>{
        console.log(error);
        
      }
    });
  }

  searchByCategory() {
    this.RateKey = 0;
    this.searchservice.getProductByCategory(this.SearchKey).subscribe({
      next: (data)=>{
        this.productList = data;
        // console.log(data)  
      },
      error: (error)=>{
        console.log(error);
        
      }
    });
  }

  refresh()
  {
    this.SearchKey = "";
    this.RateKey = 0;
    this.searchservice.getProducts().subscribe({
      next: (data)=>{
        this.productList = data;
        // console.log(data)  
      },
      error: (error)=>{
        console.log(error);
        
      }
    });
  }

  searchByRating() {
    this.SearchKey = "";
    this.searchservice.getProductByRating(this.RateKey).subscribe({
      next: (data)=>{
        this.productList = data;
        // console.log(data)  
      },
      error: (error)=>{
        console.log(error);
        
      }
    });
  }

  moreDetails()
  {
    //TODO Implement
  }

}
