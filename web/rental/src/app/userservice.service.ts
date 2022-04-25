import { Injectable } from '@angular/core';
import { user } from './user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  addUser(newUser: user):Observable<any> {
    return this.http.post<boolean>(environment.baseUrl+"/users",newUser);

  }
}
