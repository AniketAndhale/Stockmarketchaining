
import { Injectable } from '@angular/core';
import { Company } from 'src/modals/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {
  httpUrl='http://localhost:8001/company/';

  constructor(private httpClient:HttpClient) { }

  saveCompany(company:Company):Observable<Company>{
    return this.httpClient.post<Company>("http://localhost:8001/company/", company);
  }

  getAllCompany() : Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.httpUrl);
  }

  getCompanyById(id:number):Observable<Company>{
    return this.httpClient.get<Company>(this.httpUrl + id);
  }

  updateCompany(company:Company) {
    return this.httpClient.put<Company>(this.httpUrl, company);
  }

  deleteCompany(id:number):Observable<Company>{
    return this.httpClient.delete<Company>(this.httpUrl + id);
  }

}
 
