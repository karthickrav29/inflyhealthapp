import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  httpClient: any;
  private baseUrl = "http://localhost:9994/api/v1/user";
  private loginUrl = "http://localhost:9994/api/v1/login";
  private dataUrl = "http://localhost:9994/api/v1/data";

  constructor(private http: HttpClient) { }

  getUserList() : Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`)
  }


  register(data: any) {
    return this.http.post<any>("http://localhost:3000/user", data);
    // return this.http.post(`${this.baseUrl}`,data);
  }

  login(username:any, password:any):any {
    // return this.http.post(`${this.loginUrl}`,logindata);
    return this.http.get<any>("http://localhost:3000/user/?username=" + username + "&password=" + password);
    
  }
  getallData() {
    return this.http.get<any>("http://localhost:3000/user");
    // return this.http.post(`${this.dataUrl}`,user_id);
  }

  searchQuery(query: any) {
    return this.http.get<any>("http://localhost:3000/posts/?name_like=" + query);
  }

  getData() {
    return this.http.get("http://localhost:3000/posts");
  }

}
