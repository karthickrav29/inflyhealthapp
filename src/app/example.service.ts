import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  httpClient: any;

  constructor(private http: HttpClient ) {}

  register(data:any){
    return this.http.post<any>("http://localhost:3000/user",data);
  }

  login(username:any, password:any){
    return this.http.get<any>("http://localhost:3000/user/?username="+username+"&password="+password);
  }
  getallData(){
    return this.http.get<any>("http://localhost:3000/user");
  }

  // getuserData(){
  //   return this.http.get<any>("http://localhost:3000/profile");

  // }



  // addData(data:any){
  //   return this.http.post<any>("http://localhost:3000/profile",data);
  // }

searchQuery(query:any){
  return this.http.get<any>("http://localhost:3000/posts/?name_like="+query);
}

// deleteUser(num:any){
//   return this.http.delete<any>("http://localhost:3000/profile/"+num);
// }

// updateUser(num:any,data:any){
//   return this.http.put<any>("http://localhost:3000/profile/"+num,data);
// }


getData(){
  return this.http.get("http://localhost:3000/posts");
}

}
