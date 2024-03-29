import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExampleService } from '../example.service';
import { HomeComponent } from '../home/home.component';

import { TailComponent } from './tail.component';

describe('TailComponent', () => {
  let component: TailComponent;
  let fixture: ComponentFixture<TailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailComponent],
      imports: [HttpClientTestingModule, ModalModule.forRoot(),
        RouterTestingModule.withRoutes(
          [{ path: 'home', component: HomeComponent }]
        )],
      providers: [DatePipe,
        ExampleService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    component.logout();
    component.overview();
    component.livemoniter();
    component.flights();
    component.events();
    component.timeline();
    component.backtomoniter();
    component.home();
  });

  fit('should call ngoninit', fakeAsync(() => {
    component.ngOnInit();
    setInterval(() => {
    }, 2000);
    tick(2000);
    discardPeriodicTasks();
  }));

  fit('should click the button group', () => {
    let buttonName = 'btn1';
    component.setActive(buttonName);
    expect(component.activeButton).toBeDefined();
  })
  
});
