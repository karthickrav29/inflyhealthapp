import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Keepalive, NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { async, Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { routes } from './app-routing.module';
import { ExampleService } from './example.service';
import { Location } from "@angular/common";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

let router: Router;
let component: AppComponent;
let service : ExampleService;
let fixture: ComponentFixture<AppComponent>;
let location: Location;

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        NgIdleKeepaliveModule,
        NgbModule,
        ModalModule.forRoot(),
        HttpClientTestingModule,
        // Keepalive
      ],
      declarations: [
        AppComponent
      ],
      providers: [HttpClient]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    // router.initialNavigation();
  });

  fit('should create the app', () => {
    component.reset();
    component.hideChildModal();
    component.stay();
    expect(component).toBeTruthy();
  });

  fit('should call ngoninit', () => {
    component.ngOnInit();
  });


  it('should call logout function', fakeAsync(inject([Router], () => {
    // spyOn(router, 'navigate');
    component.logout();
    expect(localStorage.getItem('isUserLoggedIn')).toEqual('false');
    // expect(router.navigate).toHaveBeenCalled();
    // expect(router.navigate).toHaveBeenCalledWith(['/login']);
   
    
  })));

});