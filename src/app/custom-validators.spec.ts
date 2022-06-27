import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CustomValidators } from './custom-validators';
import { ExampleService } from './example.service';

let router: Router;
let component: CustomValidators;
let service: ExampleService;
let fixture: ComponentFixture<CustomValidators>;

describe('CustomValidators', () => {
  let component: CustomValidators;
  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidators);
    component = fixture.componentInstance;
  });
  it('should create an instance', () => {
    expect(new CustomValidators()).toBeTruthy();
    // expect(component.control)
    let pass = "123";
    let conpass = "123";
  });
});
