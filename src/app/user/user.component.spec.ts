import { query } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { first, of } from 'rxjs';
import { ExampleService } from '../example.service';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: ExampleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [
        {path: 'register', component: RegisterComponent},
      {path:'home',component:HomeComponent}]
        )],
        providers: [DatePipe,ExampleService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ExampleService);
  });

  fit('should create', () => {
    let userid = "1"
    component.logout();
    component.getID(userid);
    component.flight();
   
    let spy = spyOn( service, 'getallData').and.returnValue(of());
    let subspy = spyOn(service.getallData(), 'subscribe');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
    
  });


  fit('should call api', () => {

    let user = [
      {
        "username": "karthick",
        "email": "karthick@ltts.com",
        "password": "123456",
        "image": "../../../../assets/new.jpg",
        "confirmpassword": "123456",
        "id": 1
      },
      {
        "username": "Ravikumar",
        "firstname": "Ravikumar",
        "lastname": "ravikumar",
        "email": "r.karthick@ltts.com",
        "password": "1234567890",
        "confirmpassword": "1234567890",
        "id": 2
      }]

    // let getusername = "karthick123";

    let spy = spyOn(service, 'getallData').and.returnValue(of(user));
    component.ngOnInit();
    expect(component.newData).toBeDefined();
    expect(component.newData).toEqual(user);
    // expect(component.newData.username).toEqual("karthick123");
    // expect(component.newData.username).toEqual(component.getusername);
    
  })

   fit('should call the airlines function', () => {
    // component.airlines();
    let spy = spyOn(service, 'getData').and.returnValue(of([]));
    let subspy = spyOn(service.getData(), 'subscribe');
    component.airlines();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();

   })


   fit('should call the API in airlines function', () => {
    let user =  {
      "id": 10,
      "name": "Finnair",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Finnair_Logo.svg",
      "code": "FNR"
    }

     let spy = spyOn(service,'getData').and.returnValues(of(user));
     component.airlines();
     expect(component.getData).toBeDefined();
    //  expect(component.getData).toEqual(user);
   
   })

 


});
