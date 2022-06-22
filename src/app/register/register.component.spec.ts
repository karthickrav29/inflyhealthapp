import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ExampleService } from '../example.service';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { Router } from "@angular/router";
import { routes} from '../app-routing.module'
import { Location } from "@angular/common";

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: ExampleService;
  let router: Router;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule.withRoutes(routes),HttpClientTestingModule,
     ],
        providers: [ExampleService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ExampleService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    

  });

  fit("for register component", (() => {
    component.redirect();
    component.f;
    
    let user = {
      "username": "karthick",
      "email": "karthick@ltts.com",
      "password": "123456",
      "image": "../../../../assets/new.jpg",
      "confirmpassword": "123456",
      "id": 1
    }
    let spy = spyOn(service, 'register').and.returnValue(of([]));
    let subspy = spyOn(service.register(user), 'subscribe');
    component.register();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
  }))

  fit("should compare the data", () => {
    let user = {
      "username": "karthick123",
      "firstname": "karthick",
      "lastname": "ravikumar",
      "email": "r.karthick@ltts.com",
      "password": "123456",
      "confirmpassword": "123456",
      "id": 3
    }
   

    let spy = spyOn(service,'register').and.returnValues(of(user));
    component.register();
    expect(component.selectfiles).toBeDefined();
    expect(component.selectfiles).toEqual(user);
   
  })


  fit('navigate to "" redirects you to /login', fakeAsync(() => { 
    component.register();
    setTimeout(() => {
      router.navigate(["/login"]).then(() => {
        expect(location.path()).toBe("/login");
      });
    }, 2000);
    tick(2000);
  
   
  }));
 
});




