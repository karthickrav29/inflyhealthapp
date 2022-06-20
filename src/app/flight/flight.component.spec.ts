import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlightComponent } from './flight.component';
import { ExampleService } from '../example.service';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { of } from 'rxjs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { event } from 'jquery';

describe('FlightComponent', () => {
  let component: FlightComponent;
  let fixture: ComponentFixture<FlightComponent>;
  let service: ExampleService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightComponent, HomeComponent ],
      imports: [HttpClientTestingModule,ModalModule.forRoot(),
        RouterTestingModule.withRoutes(
          [{path: 'home', component: HomeComponent}]
        )],
      providers: [DatePipe,
        ExampleService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ExampleService);
    fixture.detectChanges();
    
  });

  fit("should call getdata()",()=>{
    component.logout();
    component.goback();  

    let spy = spyOn(service, 'getData').and.returnValue(of([]));
    let subspy = spyOn(service.getData(),'subscribe');
    component.getData();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
  });

  fit( "should compare the values", () => {
    let values:any = [{
      "id": 1,
      "name": "Air Asia",
      "code": "AXM",
      "flightdata": [
        {
          "id": 1,
          "flightname": "D71",
          "flightid": "XAX1"
        }
      ]
    },
    {
      "id": 2,
      "name": "Air Asia",
      "code": "AXM",
      "flightdata": [
        {
          "id": 1,
          "flightname": "D71",
          "flightid": "XAX1"
        }
      ]
    }];

    let spy = spyOn(service,'getData').and.returnValues(of(values));
    component.getData();
    expect(spy).toHaveBeenCalled();
    expect(component.flightData).toBeDefined();
    expect(component.flightData).toEqual(values);
    expect(localStorage.getItem('flightId')).toEqual('1');

  });

 fit('should call openmap function',() => {

  let flightid = "1";
  let event = "Mouseenter";
  let spy = spyOn(service, 'getData').and.returnValue(of([]));
    let subspy = spyOn(service.getData(),'subscribe');
    component.openMap(flightid,event);
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
  
 });


 fit('should call openmap data',() => {

  let flightid = "ASA1";
  let values:any = [{
    "id": 1,
    "name": "Air Asia",
    "code": "AXM",
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
          }
        }
    ]
  }];
  
  let event = "Mouseenter";
  let spy = spyOn(service,'getData').and.returnValue(of(values));
  component.openMap(flightid,event);
  expect(spy).toHaveBeenCalled();
  expect(component.flightData).toBeDefined();
  expect(component.flightData).toEqual(values);
  expect(component.flidata.flightid).toEqual(flightid);
  
  // component.flidata = component.flightData[0].flightdata;
  // expect(component.newData).toBeDefined();
  // expect(component.flidata).toBeDefined();
  // expect(component.flidata).toEqual(component.newData.flightdata);
  // component.agmmap = component.flidata[0].dept;
  // console.log("agmmap",component.flidata[0].dept);
  // expect(component.agmmap).toBeDefined();
  // console.log("finale",component.agmmap);


 });


  

 
});
