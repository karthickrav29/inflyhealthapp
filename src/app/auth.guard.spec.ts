import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ExampleService } from './example.service';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent,UserComponent,LoginComponent,FlightComponent, HomeComponent ],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)],
      providers: [AuthGuard]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });

  fit('should be created', () => {
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'});
    expect(result).toBeTruthy();
    let url = 'login';
    guard.checkLogin(url);
    expect(localStorage.getItem('isUserLoggedIn')).toEqual('false');
    // expect(result).toEqual(true);
    // expect(navigateSpy).toEqual(['/login']);
    // let url = '/user';
    // let res = guard.checkLogin(url);
    // guard.checkLogin(url);
    
    // expect(guard.checkLogin(url)).toEqual(res);
    // expect(guard).toBeTruthy();
  });
});
