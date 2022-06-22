import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExampleService } from '../example.service';
import { HomeComponent } from '../home/home.component';

import { AirlinesComponent } from './airlines.component';

describe('AirlinesComponent', () => {
  let component: AirlinesComponent;
  let fixture: ComponentFixture<AirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinesComponent ],
      imports: [HttpClientTestingModule,ModalModule.forRoot(),
        RouterTestingModule.withRoutes(
          [{path: 'home', component: HomeComponent}]
        )],
      providers: [DatePipe,
        ExampleService]
    },
    )
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    let id = "ABC";
    expect(component).toBeTruthy();
    component.logout();
    component.overview();
    component.dashboard();
    component.recommendation();
    component.tail();
    component.software();
    component.home();
    component.tailopen(id);
  });

  fit('should be call oninit', () => {
    component.ngOnInit();
  })
});
