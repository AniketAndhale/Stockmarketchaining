import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from 'src/modals/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpUrl='http://localhost:3000/contact/';

  constructor(private httpClient:HttpClient) { }

  saveFeedback(contact:Contact):Observable<Contact>{
    return this.httpClient.post<Contact>("http://localhost:3000/contact/", contact);
  }

  getAllContact() : Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.httpUrl);
  }

}
