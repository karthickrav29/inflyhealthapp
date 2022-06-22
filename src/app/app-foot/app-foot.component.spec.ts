import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFootComponent } from './app-foot.component';

describe('AppFootComponent', () => {
  let component: AppFootComponent;
  let fixture: ComponentFixture<AppFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
  });
});
