import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  currentDate: any;
  currentTime: any;
  getData: any;
  airname: any;
  airimage: any;
  titlename: any;
  titlelogo: any;
  flightname: any;
  overviews: any = "dashboard";
  clickedElement: any;
  activeButton: any = 'btn1';

  constructor(private date: DatePipe,
    private router: Router,
    private ToastService: NgToastService,
    private apiservice: ExampleService) {
    setInterval(() => {
      this.currentDate = this.date.transform((new Date), 'MM/dd/yyyy');
      this.currentTime = this.date.transform((new Date), 'h:mm:ss');
    }, 1);
  }

  ngOnInit(): void {
    this.overviews = "overview";
    this.apiservice.getData().subscribe(data => {
      this.getData = data;
      this.airname = localStorage.getItem("airname");
      this.airimage = localStorage.getItem("airimage");
      for (this.flightname of this.getData) {
        if (this.flightname.name == this.airname) {
          this.titlename = this.flightname.name
        }
        if (this.flightname.image == this.airimage) {
          this.titlelogo = this.flightname.image
        }
      }

    })
  }


  logout() {
    this.router.navigate(['/home']);
    this.ToastService.success({ detail: "Success Message", summary: "Logout Successful", duration: 2000 });
    localStorage.setItem("isUserLoggedIn", "false");
  }

  // onButtonGroupClick($event: any) {
  //   this.clickedElement = $event.target;
  //   console.log("click", $event);
  //   if (this.clickedElement.nodeName === "BUTTON") {
  //     let isCertainButtonAlreadyActive = this.clickedElement.parentElement.querySelector(".active");
  //     if (isCertainButtonAlreadyActive) {
  //       isCertainButtonAlreadyActive.classList.remove("active");
  //     }
  //     this.clickedElement.className += " active";
  //   }
  // }

  overview() {
    this.overviews = "overview";
  }

  dashboard() {
    this.overviews = "dashboard";
  }

  tail() {
    this.overviews = "tail";
  }

  recommendation() {
    this.overviews = "recommendation";
  }

  software() {
    this.overviews = "software";
  }

  tailopen(id: any) {
    localStorage.setItem("tailId", id);
    this.router.navigate(['/tail']);
  }

  home() {
    this.router.navigate(['/user']);
  }

  setActive = (buttonName: any) => {
    this.activeButton = buttonName;
  }
  isActive = (buttonName: any) => {
    return this.activeButton === buttonName;
  }
}
