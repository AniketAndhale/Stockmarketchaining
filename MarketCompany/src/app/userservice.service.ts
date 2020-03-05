import { Injectable, Inject } from '@angular/core';
import { User } from 'src/modals/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  httpUrl='http://localhost:8000/users/';

  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht) { }

  saveUser(user:User):Observable<User>{
    return this.httpClient.post<User>(`http://localhost:8000/users/`, user);
  }

  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(this.httpUrl + id);
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>(this.httpUrl, user);
  }

  deleteUser(id:number):Observable<User>{
    return this.httpClient.delete<User>(this.httpUrl + id);
  }

  reg(){
    return this.ht.get("http://localhost:8000/reg");
  }
  serActivation(obj){
    console.log("in servivce..");
    return this.ht.put("http://localhost:8000/users/activate",obj);
  }

}
