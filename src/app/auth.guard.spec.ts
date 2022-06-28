import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, UserComponent, LoginComponent, HomeComponent],
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
    const result = guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{ url: 'testUrl' });
    expect(result).toBeTruthy();
    let url = '/login';
    guard.checkLogin(url);
    console.log("guarddddddd", localStorage.getItem("isUserLoggedIn"));
    expect(guard.val).toBeDefined();
    expect(guard.val).toEqual('false');
  });
});
