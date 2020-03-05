import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sector } from 'src/modals/sector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  httpUrl='http://localhost:8004/sector/';

  constructor(private httpClient:HttpClient) { }

  saveSector(sector:Sector):Observable<Sector>{
    return this.httpClient.post<Sector>("http://localhost:8004/sector/", sector);
  
  }

  getAllSector() : Observable<Sector[]>{
    return this.httpClient.get<Sector[]>(this.httpUrl);
  }

  getSectorById(id:number):Observable<Sector>{
    return this.httpClient.get<Sector>(this.httpUrl + id);
  }

  updateSector(sector:Sector):Observable<Sector>{
    return this.httpClient.put<Sector>(this.httpUrl, sector);
  }

  deleteSector(id:number):Observable<Sector>{
    return this.httpClient.delete<Sector>(this.httpUrl + id);
  }

}
 