import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { GMapComponent } from '../g-map/g-map.component';
import { product } from '../product';
import { SearchserviceService } from '../searchservice.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  SearchKey: string = "";
  BrandKey: string = "";
  loggedInuser:string = "";
  productList: product[] = [];
  isLoggedIn: boolean = false;
  isUser:boolean = false;
  showrec:boolean = false;
  RateKey: number = 0;
  searchText: string = "";
  options = ['Rating 1 & above', 'Rating 2 & above', 'Rating 3 & above', 'Rating 4 & above']
  bsModalRef?: BsModalRef;
  mapOptions = {
    center: { lat: 40, lng: -20 },
    zoom: 4
  };
  constructor(
    public router: Router,
    private authService: AuthserviceService,
    private searchservice: SearchserviceService, private dialog: MatDialog, private modalService: BsModalService,
    private bookingservice: BookingService) {
    // if (authService.loggedIn) {
    //   this.loggedIn = true;
    // }
  }

  ngOnInit(): void {
    this.searchservice.getProducts().subscribe({
      next: (data) => {
        this.productList = data;
        // console.log(data)  
      },
      error: (error) => {
        console.log(error);

      }
    });
  }

  searchByCategory() {
    this.RateKey = 0;
    this.BrandKey = "";
    this.searchservice.getProductByCategory(this.SearchKey).subscribe({
      next: (data) => {
        this.productList = data;
        // console.log(data)  
      },
      error: (error) => {
        console.log(error);

      }
    });
  }

  refresh() {
    this.SearchKey = "";
    this.RateKey = 0;
    this.BrandKey = "";
    this.searchservice.getProducts().subscribe({
      next: (data) => {
        this.productList = data;
        // console.log(data)  
      },
      error: (error) => {
        console.log(error);

      }
    });
  }

  searchByRating() {
    this.SearchKey = "";
    this.BrandKey = "";
    this.searchservice.getProductByRating(this.RateKey).subscribe({
      next: (data) => {
        this.productList = data;
        // console.log(data)  
      },
      error: (error) => {
        console.log(error);

      }
    });
  }

  searchByBrand() {
    this.SearchKey = "";
    this.RateKey = 0;
    this.searchservice.getProductByBrand(this.BrandKey).subscribe({
      next: (data) => {
        this.productList = data;
        // console.log(data)  
      },
      error: (error) => {
        console.log(error);

      }
    });
  }

  openMaps(lat: number, long: number) {
    const options = {
      center: {
        lat: lat,
        lng: long
      },
      zoom: 10
    }
    //console.log(options)
    this.bsModalRef = this.modalService.show(GMapComponent);
    this.bsModalRef.content.options = options;
    // const dialogRef = this.dialog.open(GMapComponent);
  }
  getrec()
  {
    this.bookingservice.getrecommendations(this.loggedInuser).subscribe({
      next: (data) => {
        this.productList = data;
        // console.log(data)  
      },
      error: (error) => {
        console.log(error);

      }
    });
  }
  book(id:number) {

    // this.bookingservice.book(this.loggedInuser,id);
    this.bookingservice.book(this.loggedInuser,id).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['cart'])  
      },
      error: (error) => {
        console.log(error);

      }
    });

  }
  loggedIn():boolean {
    if(this.authService.loggedIn){
      this.isLoggedIn = true;
      this.loggedInuser = this.authService.loggedInUser;
      this.isUser = this.authService.isUser;
      // console.log(this.authService.isUser)
      return true
    }
    else{
      this.isLoggedIn = false;
      return false;
    }
  }


}
