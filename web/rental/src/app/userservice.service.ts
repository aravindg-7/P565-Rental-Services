import { Injectable } from '@angular/core';
import { user } from './user';
import { product } from './product';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  addUser(newUser: user) {

    console.log(newUser);
    return this.http.post<boolean>(environment.baseUrl+"/users",newUser);

  }
  addProduct(newProduct: product){
    return this.http.post<boolean>(environment.baseUrl+"/home/addproduct",newProduct);
  }
}
