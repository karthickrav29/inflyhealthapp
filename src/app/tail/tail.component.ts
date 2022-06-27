import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-tail',
  templateUrl: './tail.component.html',
  styleUrls: ['./tail.component.css']
})
export class TailComponent implements OnInit {

  currentDate: any;
  currentTime: any;
  tailId: any;
  tails: any = "overview";
  lat = 12.9716;
  long = 77.5946;
  zoom = 7;
  dummyItems: any = [];
  index = 1;
  timer: any;

  driversList = [
    {
      lat: 12.976520833047969,
      lng: 77.6978423966079,
      label: 'Marathahalli'
    },
    {
      lat: 12.9784442017049,
      lng: 77.75706968804623,
      label: 'WhiteFeild'
    },
    {
      lat: 12.981382975773172,
      lng: 77.80165156125022,
      label: 'Samethanahalli'
    },
    {
      lat: 12.98192047586593,
      lng: 77.82261441282776,
      label: 'Kacharakanahalli'
    },
    {
      lat: 12.983647373397309,
      lng: 77.86624452955121,
      label: 'Mallur'
    },
    {
      lat: 12.983805364606692,
      lng: 77.87950530728783,
      label: 'Pichaguntrahalli'
    },
    {
      lat: 12.98911686088694,
      lng: 78.01230985231821,
      label: 'Chakkanahalli'
    },
    {
      lat: 13.0159920291509884,
      lng: 78.68397237572212,
      label: 'Aravatla'
    },
    {
      lat: 13.02400687314627,
      lng: 78.86374094704487,
      label: 'Modi Kuppam'
    },
    {
      lat: 13.03571569709963,
      lng: 79.13767421722709,
      label: 'TN-AP Border'
    },
    {
      lat: 13.039890046602812,
      lng: 79.21389212716636,
      label: 'Vinnampalli'
    },
    {
      lat: 13.04235900929169,
      lng: 79.28289491534588,
      label: 'Marudhampakkam'
    },
    {
      lat: 13.048996748834936,
      lng: 79.46166820641386,
      label: 'Ayal'
    },
    {
      lat: 13.056712394184299,
      lng: 79.62835196867134,
      label: 'Parithiputhur'
    },
    {
      lat: 13.061258492595368,
      lng: 79.748043708932,
      label: 'Perikalakattur'
    },
    {
      lat: 13.067654710682806,
      lng: 79.90914768300996,
      label: 'Polivakkam'
    },
    {
      lat: 13.074488199560138,
      lng: 80.0786590525848,
      label: 'Chokkanallur'
    },
    {
      lat: 13.081125094614258,
      lng: 80.21053989483043,
      label: 'Anna Nagar'
    },
  ]

  markers = [
    {
      lat: 13.0827,
      lng: 80.2707,
      label: 'Chennai'
    },
    {
      lat: 12.9716,
      lng: 77.5946,
      label: 'Bengaluru'
    }
  ];

  constructor(private date: DatePipe,
    private router: Router,
    private ToastService: NgToastService) {
    setInterval(() => {
      this.currentDate = this.date.transform((new Date), 'MM/dd/yyyy');
      this.currentTime = this.date.transform((new Date), 'h:mm:ss');
    }, 1);
  }

  ngOnInit(): void {
    this.getTailid();
    if (this.driversList[0]) {
      this.dummyItems = this.driversList[0];
    }
    this.timer = setInterval(() => {
      if (this.index < this.driversList.length) {
        this.dummyItems = this.driversList[this.index];
        this.index++;
      }
    }, 2000)
  }

  logout() {
    this.router.navigate(['/home']);
    this.ToastService.success({ detail: "Success Message", summary: "Logout Successful", duration: 2000 });
    localStorage.setItem("isUserLoggedIn", "false");
  }

  getTailid() {
    this.tailId = localStorage.getItem("tailId");
  }

  onButtonGroupClick($event: any) {
    let clickedElement = $event.target || $event.srcElement;
    if (clickedElement.nodeName === "BUTTON") {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
    }
  }

  overview() {
    this.tails = 'overview';
  }
  livemoniter() {
    this.tails = 'livemoniter';
  }
  timeline() {
    this.tails = 'timeline';
  }
  flights() {
    this.tails = 'flights';
  }
  events() {
    this.tails = 'events';
  }

  backtomoniter() {
    this.router.navigate(['/airlines']);
  }

  home() {
    this.router.navigate(['/user']);
  }

}
