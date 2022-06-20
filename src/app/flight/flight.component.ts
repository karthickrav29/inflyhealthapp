import { style } from '@angular/animations';
import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { NgToastService } from 'ng-angular-popup';
import { ExampleService } from '../example.service';

declare var window: any;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {

  currentDate: any;
  currentTime: any;
  flightData: any;
  newData: any;
  newDatas:any;
  flightId: any;
  finalData: any;
  count: any;
  isMap: boolean = false;
  formModal: any;
  mapdata: any;
  zoom: any = 3;
  agmmap: any = [];
  mapline: any = [];
  overlay: any = [];
  flidata: any;
  mapmodal:any;

  constructor(private date: DatePipe,
    private router: Router,
    private ToastService: NgToastService,
    private api: ExampleService,
    private location: Location) {
    setInterval(() => {
      this.currentDate = this.date.transform((new Date), 'MM/dd/yyyy');
      this.currentTime = this.date.transform((new Date), 'h:mm:ss');
    }, 1);
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.api.getData().subscribe(data => {
      this.flightData = data;
      for (this.newData of this.flightData) {
        this.flightId = localStorage.getItem('flightId');
        if (this.newData.flightdata) {
          if (this.flightId == this.newData.id) {
            this.finalData = this.newData.flightdata;
            this.count = this.finalData.length;
          }
        }
      }
    });
  }



  logout() {
    this.router.navigate(['/home']);
    this.ToastService.success({ detail: "Success Message", summary: "Logout Successful", duration: 2000 });
    localStorage.setItem("isUserLoggedIn", "false");
  }


  goback() {
    this.location.back();
  }


  openMap(flightsid: any , event: any):any {
    // event.target.click();
      this.overlay = [];
      this.agmmap = [];
      this.mapline = [];
      this.api.getData().subscribe(data => {
        this.flightData = data;
      for (this.newDatas of this.flightData) {
        this.flightId = localStorage.getItem('flightId');
        if (this.flightId == this.newDatas.id) {
          for ( this.flidata of this.newDatas.flightdata) {
            if (this.flidata.flightid == flightsid) {
              this.mapdata = this.flidata;
              this.agmmap.push({
                lat: +this.mapdata.dept.lat,
                lng: +this.mapdata.dept.lng
              });
              this.mapline.push({
                lat: +this.mapdata.dept.lat,
                lng: +this.mapdata.dept.lng
              });
              this.mapline.push({
                lat: +this.mapdata.arr.lat,
                lng: +this.mapdata.arr.lng
              });
              this.overlay.push({
                lat: +this.mapdata.cur.lat,
                lng: +this.mapdata.cur.lng
              })
              
            }
          }
        }
      }
    })
  }


  }
