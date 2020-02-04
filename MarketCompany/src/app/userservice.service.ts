import { Injectable } from '@angular/core';
import { User } from 'src/modals/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  httpUrl="http://localhost:3000/user/";

  constructor(private httpClient:HttpClient) { }

  saveUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.httpUrl, user);
  }

  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(this.httpUrl + id);
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>(this.httpUrl + user.id, user);
  }

  deleteUser(id:number):Observable<User>{
    return this.httpClient.delete<User>(this.httpUrl + id);
  }

}
