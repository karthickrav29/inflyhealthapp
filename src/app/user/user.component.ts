import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ExampleService } from '../example.service';
import { delay } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  getData: any;
  buttonToggle: boolean = false;
  refData: any;
  jsonData: any;
  isLoading: boolean = false;
  currentDate: any;
  currentTime: any;
  getusername: any;
  newData: any;
  getUser: any;
  searchQuery: any;
  user: any;

  constructor(
    private router: Router,
    private ToastService: NgToastService,
    private apiservice: ExampleService,
    private date: DatePipe
  ) {
    setInterval(() => {
      this.currentDate = this.date.transform((new Date), 'MM/dd/yyyy');
      this.currentTime = this.date.transform((new Date), 'h:mm:ss');
    }, 1);
  }


  ngOnInit(): void {
    this.getusername = localStorage.getItem("username");
    this.apiservice.getallData().subscribe(data => {
      this.newData = data;
      for (this.user of this.newData) {
        if (this.user.username == this.getusername) {
          this.getUser = this.user.username;
        }
      }
    })

  }

  logout() {
    this.router.navigate(['/home']);
    this.ToastService.success({ detail: "Success Message", summary: "Logout Successful", duration: 2000 });
    localStorage.setItem("isUserLoggedIn", "false");
  }


  airlines() {
    this.buttonToggle = true;
    this.apiservice.getData().subscribe(data => {
      this.getData = data;
      this.isLoading = true;
    })
  }

  flight() {
    this.buttonToggle = false;
  }

  getID(name: any, image: any) {
    localStorage.setItem("airname", name);
    localStorage.setItem("airimage", image);
  }


  search(searchQuery: any) {
    this.apiservice.searchQuery(searchQuery).subscribe(data => {
      this.getData = data;
    })
  }

}