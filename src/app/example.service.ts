import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  httpClient: any;

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post<any>("http://localhost:3000/user", data);
  }

  login(username: any, password: any) {
    return this.http.get<any>("http://localhost:3000/user/?username=" + username + "&password=" + password);
  }
  getallData() {
    return this.http.get<any>("http://localhost:3000/user");
  }

  searchQuery(query: any) {
    return this.http.get<any>("http://localhost:3000/posts/?name_like=" + query);
  }

  getData() {
    return this.http.get("http://localhost:3000/posts");
  }

}
