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
      declarations: [UserComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'register', component: RegisterComponent },
            { path: 'home', component: HomeComponent }]
        )],
      providers: [DatePipe, ExampleService]
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
    let userid = "Air Asia"
    let image = "https://upload.wikimedia.org/wikipedia/commons/5/55/Aeroflot.svg"
    component.logout();
    component.getID(userid, image);
    component.flight();

    let spy = spyOn(service, 'getallData').and.returnValue(of());
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
    let user = {
      "id": 10,
      "name": "Finnair",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Finnair_Logo.svg",
      "code": "FNR"
    }

    let spy = spyOn(service, 'getData').and.returnValues(of(user));
    component.airlines();
    expect(component.getData).toBeDefined();
    //  expect(component.getData).toEqual(user);

  });

  fit('should call search', () => {
    let searchquery = "Fin";
    component.search(searchquery);
    component.buttonToggle = true;
    expect(component.buttonToggle).toBeTruthy();
    let spy = spyOn(service, 'searchQuery').and.returnValue(of([]));
    let subspy = spyOn(service.searchQuery(searchquery), 'subscribe');
    component.search(searchquery);
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();

  })

  fit('should subscribe search query', () => {

    let searchquery = "Fin";
    let user = [{
      "id": 10,
      "name": "Finnair",
      "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Finnair_Logo.svg",
      "code": "FNR"
    }];
    let spy = spyOn(service, 'searchQuery').and.returnValue(of(user));
    component.search(searchquery);
    expect(component.getData).toBeDefined();
    expect(component.getData).toEqual(user);
  })

});
