import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ExampleService } from '../example.service';
import { User } from '../user';
import { Login } from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username: string | undefined;
  // password: string | undefined;
  newData: any;
  user : User[] | undefined;
  logins : Login = new Login();
  

  constructor(private apiservice: ExampleService, private router: Router,
    private ToastService: NgToastService) { }

  ngOnInit(): void { 
    this.getUsers();
  }


  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required,
    Validators.pattern("^[a-zA-Z0-9._%+-]{0,100}$")]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  });

  private getUsers(){
    this.apiservice.getUserList().subscribe(data => {
      this.user = data;
    })
  }



  login(): any {
    this.logins.username = this.loginForm.value.username;
    this.logins.password = this.loginForm.value.password;
    localStorage.setItem("username", this.loginForm.value.username);
    localStorage.setItem("password", this.loginForm.value.password);
    this.apiservice.login(this.logins).subscribe((data: any): any => {
      this.newData = data;
      if (this.newData != null) {
        localStorage.setItem("mobile", this.newData.mobile);
        localStorage.setItem("isUserLoggedIn", "true");
        this.router.navigate(['/phone']);
        this.ToastService.success({ detail: "Success Message", summary: "Login Successful", duration: 2000 });

      } else {
        this.ToastService.error({ detail: "Login Failed", summary: "Incorrect Username or Password", duration: 2000 });
      }
    });

  }

  redirect() {
    this.router.navigate(['/register']);
  }
}
