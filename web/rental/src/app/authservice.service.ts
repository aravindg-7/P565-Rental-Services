import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  loggedInUser:string = "";
  role: any;
  userId: any;
  validCredentials: boolean=true;
  isAdmin: boolean=false;
  loggedIn: boolean=false;
  accessToken: any;
  error: any;

  authenticate(user:string,password:string):Observable<any> {
    let credentials = btoa(user+':'+password);
    let headers = new HttpHeaders();
    console.log(credentials);
    headers = headers.set('Authorization', 'Basic '+credentials)
    return this.httpClient.get(environment.baseUrl+"/authenticate", {headers})
  }

  constructor(public router: Router,private httpClient:HttpClient) {
   }

  authenticateUser(user: { username: string; password: string; }){


    this.authenticate(user.username,user.password).subscribe({
        next: (data)=>{
          console.log(data.role)
          this.role=data.role;
          this.loggedInUser =user.username;
          this.userId=user.username;
          this.validCredentials = true;
          if(data.role == 'ADMIN')
            this.isAdmin = true;
          this.loggedIn = true;
          this.accessToken=data.token;
          console.log(this.accessToken)
          this.router.navigate(['home']);
        },
        error: (error)=>{
          this.validCredentials = false;
          this.error = error.error.message;
          if (error.error.errors != null) {
            this.error = error.error.errors[0];
          }
          console.log(error);
          console.log("ERROR");
        }
      });
  
      }

      logout() {
        // let cartservice:CartService
        this.loggedInUser = "";
        this.isAdmin = false;
        this.loggedIn = false;
        this.userId=null;
        this.role=null;
        // this.router.navigate(['login']);
        // this.router.navigate(['home']);
      }
}
