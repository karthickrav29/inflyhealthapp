import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxCategoryChartComponent, IgxLegendComponent } from 'igniteui-angular-charts';
import { NgToastService } from 'ng-angular-popup';
import { ExampleService } from '../example.service';
import { CountryRenewableElectricity, CountryRenewableElectricityItem } from '../country-renewable-electricity';

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
  activeButton: any = 'btn1';
  dropname: any;
  selectname: any;
  selectedLevel: any;
  chartType: any;


    data:any = [
      {id: 0, name: 'pie'},
      {id: 1, name: 'line'},
      {id: 2, name: 'bar'},
      {id: 3, name: 'doughnut'},
  ];
    chartDatasets = [
      { data: [180, 50, 100, 40, 120], label: 'My First dataset' },
      // {data: [28, 48, 40, 19, 86], label: 'My Second dataset'}
    ];

    chartLabels = ['Jan', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

    chartColors = [
      {
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
        borderWidth: 2,
      },
      {
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
        borderWidth: 2,
      }
    ];

    chartOptions: any = {
      responsive: true
    };


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

  setActive = (buttonName: any) => {
    this.activeButton = buttonName;
  }
  isActive = (buttonName: any) => {
    return this.activeButton === buttonName;
  }

  dropdown() {
    this.dropname = this.getData;
  }

  nameSelect(name: any) {
    this.apiservice.getData().subscribe(data => {
      this.selectname = data;
      for (let airname of this.selectname) {
        if (name == airname.name) {
          this.titlename = airname.name;
          localStorage.setItem("airname", this.titlename);
          this.titlelogo = airname.image;
          localStorage.setItem("airimage", this.titlelogo);
          this.setActive('btn1');
          this.isActive('btn1');
        }
      }
    });
  }

  chartClicked(event: any): void {
    console.log(event);
  }

  chartHovered(event: any): void {
    console.log(event);
  }

  mapSelect() {
    this.chartType = this.selectedLevel.name;
  }
}
