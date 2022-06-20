import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { of } from 'rxjs';
import { ExampleService } from '../example.service';
import { RegisterComponent } from '../register/register.component';
import { UserComponent } from '../user/user.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: ExampleService;
  let toastService: NgToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'user', component: UserComponent},
        {path: 'register', component: RegisterComponent}]
        )],
        providers: [ExampleService,
        NgToastService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ExampleService);
    toastService = TestBed.inject(NgToastService);
  });

  fit('should create', () => {
    component.login();

    component.redirect();
    let username = "karthick";
    let password = "123456";

    let spy = spyOn(service, 'login').and.returnValue(of([]));
    let subspy = spyOn(service.login(username,password),'subscribe');
    component.login();
    expect(spy).toHaveBeenCalledBefore(subspy);
    expect(subspy).toHaveBeenCalled();
   
  });

  fit( "should compare the values", () => {

    let data = [{
      "username": "new",
      "email": "karthick@ltts.com",
      "password": "123456",
      "image": "../../../../assets/new.jpg",
      "confirmpassword": "123456",
      "id": 1
    }]

    let value = 1;
    let spy = spyOn(service,'login').and.returnValues(of(data));
    component.login();
    localStorage.setItem("username","karthick");
    expect(component.newData).toBeDefined();
    expect(component.newData.length).toEqual(value);
    localStorage.setItem("isUserLoggedIn","true");

  });

  fit("should be false for else condition",() => {
    let data = {};

    let newspy = spyOn(service,'login').and.returnValues(of(data));
    component.login();
    localStorage.setItem("username","karthick");
    expect(component.newData).toBeDefined();
    expect(component.newData.length).toEqual(undefined);
    
  })

 
});