import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ExampleService } from '../example.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Output() Searchquerydata = new EventEmitter<any>();
  currentDate: any;
  currentTime: any;
  getData: any;
  searchQuery: any;


  constructor(private date: DatePipe,
              private apiservice: ExampleService,
              private router: Router,
              private ToastService: NgToastService) {
    setInterval(() => {
      this.currentDate = this.date.transform((new Date), 'MM/dd/yyyy');
      this.currentTime = this.date.transform((new Date), 'h:mm:ss');
    }, 1);
   }

  ngOnInit(): void {
  }

  search(searchQuery: any) {
    this.apiservice.searchQuery(searchQuery).subscribe(data => {
      this.getData = data;
      this.Searchquerydata.emit(this.getData);
    })
  }

  logout() {
    this.router.navigate(['/home']);
    this.ToastService.success({ detail: "Success Message", summary: "Logout Successful", duration: 2000 });
    localStorage.setItem("isUserLoggedIn", "false");
  }
  home() {
    this.router.navigate(['/user']);
  }

}
