import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExampleService } from '../example.service';
import { of } from 'rxjs';
import { AirlinesComponent } from './airlines.component';
import { UserComponent } from '../user/user.component';

describe('AirlinesComponent', () => {
  let component: AirlinesComponent;
  let fixture: ComponentFixture<AirlinesComponent>;
  let service: ExampleService;
  let menuToggleSpy: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirlinesComponent],
      imports: [HttpClientTestingModule, ModalModule.forRoot(),
        RouterTestingModule.withRoutes(
          [{ path: 'user', component: UserComponent }]
        )],
      providers: [DatePipe,
        ExampleService]
    },
    )
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ExampleService);
    menuToggleSpy = jasmine.createSpy('event');
  });

  fit('should create', () => {
    let id = "ABC";
    component.logout();
    component.overview();
    component.dashboard();
    component.recommendation();
    component.tail();
    component.software();
    // component.home();
    component.dropdown();
    component.tailopen(id);
    expect(component).toBeTruthy();
  });

  fit('should be call oninit', () => {
    let spy = spyOn(service, 'getData').and.returnValue(of());
    let subspy = spyOn(service.getData(), 'subscribe');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
  })

  fit('should be subscribe data', () => {

    let value = [
      {
        "id": 1,
        "name": "Aero Flot",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Aeroflot.svg",
        "code": "SU",
        "flightdata": [
          {
            "id": 1,
            "flightname": "A7AHL",
            "flightid": "UAE38",
            "arrival": "DFW",
            "departure": "LAX",
            "dept": {
              "lat": "33.94277266812347",
              "lng": "-118.41023588772588"
            },
            "arr": {
              "lat": "33.272331806543605",
              "lng": "-96.91604754566146"
            },
            "cur": {
              "lat": "33.43532060723313",
              "lng": "-112.01025274878162"
            },
            "messagetime": "60347",
            "feet": "33",
            "landinghrs": "05",
            "operational": true,
            "nonoperational": false,
            "degret": false,
            "unknown": true,
            "status": "unknown"
          }
        ]
      },
      {
        "id": 2,
        "name": "Air Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg",
        "code": "AXM",
        "flightdata": [
          {
            "id": 1,
            "flightname": "D71",
            "flightid": "XAX1",
            "arrival": "KOL",
            "departure": "KAN",
            "messagetime": "2",
            "feet": "3",
            "landinghrs": "00",
            "operational": false,
            "nonoperational": false,
            "degret": false,
            "unknown": false,
            "status": "degret",
            "dept": {
              "lat": "12.045418754070331",
              "lng": "8.522128940951788"
            },
            "arr": {
              "lat": "22.653687913106207",
              "lng": "88.44495422651309"
            },
            "cur": {
              "lat": "15.71038944592135",
              "lng": "44.14585944839717"
            }
          },
          {
            "id": 2,
            "flightname": "AS1",
            "flightid": "ASA1",
            "arrival": "WDC",
            "departure": "SAT",
            "messagetime": "234",
            "feet": "21",
            "landinghrs": "12",
            "operational": true,
            "nonoperational": true,
            "degret": true,
            "unknown": true,
            "status": "operational",
            "dept": {
              "lat": "29.53126262722841",
              "lng": "-98.46835913170116"
            },
            "arr": {
              "lat": "38.84823387383739",
              "lng": "-77.17134396501721"
            },
            "cur": {
              "lat": "34.764757111321714",
              "lng": "-86.62375118261006"
            }
          }
        ]
      }
    ];

    let spy = spyOn(service, 'getData').and.returnValue(of(value));
    component.ngOnInit();
    expect(component.getData).toBeDefined();
    expect(component.getData).toEqual(value);
    expect(component.airname).toEqual(component.flightname.name);

  })

  fit('should click the button group', () => {
    let buttonName = 'btn1';
    component.setActive(buttonName);
    expect(component.activeButton).toBeDefined();
  })

  fit('should call name select function', () => {
    let name = "Air Asia";
    let spy = spyOn(service, 'getData').and.returnValue(of());
    let subspy = spyOn(service.getData(), 'subscribe');
    component.nameSelect(name);
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
  });

  fit('should return the api values', () => {
    let name = "Air Asia";
    let value = [
      {
        "id": 1,
        "name": "Aero Flot",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Aeroflot.svg",
        "code": "SU",
        "flightdata": [
          {
            "id": 1,
            "flightname": "A7AHL",
            "flightid": "UAE38",
            "arrival": "DFW",
            "departure": "LAX",
            "dept": {
              "lat": "33.94277266812347",
              "lng": "-118.41023588772588"
            },
            "arr": {
              "lat": "33.272331806543605",
              "lng": "-96.91604754566146"
            },
            "cur": {
              "lat": "33.43532060723313",
              "lng": "-112.01025274878162"
            },
            "messagetime": "60347",
            "feet": "33",
            "landinghrs": "05",
            "operational": true,
            "nonoperational": false,
            "degret": false,
            "unknown": true,
            "status": "unknown"
          }
        ]
      },
      {
        "id": 2,
        "name": "Air Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg",
        "code": "AXM",
        "flightdata": [
          {
            "id": 1,
            "flightname": "D71",
            "flightid": "XAX1",
            "arrival": "KOL",
            "departure": "KAN",
            "messagetime": "2",
            "feet": "3",
            "landinghrs": "00",
            "operational": false,
            "nonoperational": false,
            "degret": false,
            "unknown": false,
            "status": "degret",
            "dept": {
              "lat": "12.045418754070331",
              "lng": "8.522128940951788"
            },
            "arr": {
              "lat": "22.653687913106207",
              "lng": "88.44495422651309"
            },
            "cur": {
              "lat": "15.71038944592135",
              "lng": "44.14585944839717"
            }
          },
          {
            "id": 2,
            "flightname": "AS1",
            "flightid": "ASA1",
            "arrival": "WDC",
            "departure": "SAT",
            "messagetime": "234",
            "feet": "21",
            "landinghrs": "12",
            "operational": true,
            "nonoperational": true,
            "degret": true,
            "unknown": true,
            "status": "operational",
            "dept": {
              "lat": "29.53126262722841",
              "lng": "-98.46835913170116"
            },
            "arr": {
              "lat": "38.84823387383739",
              "lng": "-77.17134396501721"
            },
            "cur": {
              "lat": "34.764757111321714",
              "lng": "-86.62375118261006"
            }
          }
        ]
      }
    ];

    let spy = spyOn(service, 'getData').and.returnValue(of(value));
    component.nameSelect(name);
    expect(component.selectname).toBeDefined();
    expect(component.selectname).toEqual(value);
  })
});

