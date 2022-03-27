// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-g-map',
//   templateUrl: './g-map.component.html',
//   styleUrls: ['./g-map.component.css']
// })
// export class GMapComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.css']
})
export class GMapComponent implements OnInit {
  apiLoaded: Observable<boolean>;

  @Input()
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAhY34yQUv78qHa4-hbY7-I1sOTxG-c7pU', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }
  ngOnInit(): void {
  }
}