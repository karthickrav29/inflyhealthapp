import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { routes } from './app-routing.module';
import { ExampleService } from './example.service';
import { Location } from "@angular/common";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

let router: Router;
let component: AppComponent;
let service: ExampleService;
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
        NgIdleKeepaliveModule
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
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  fit('should create the app', () => {
    component.reset();
    component.hideChildModal();
    component.stay();
    component.logout();
    localStorage.setItem("isUserLoggedIn", 'false');
    expect(component).toBeTruthy();
  });

  fit('should call ngoninit', () => {
    component.ngOnInit();
    expect(component.userlogin).toEqual(localStorage.getItem("isUserLoggedIn"));
  });

});