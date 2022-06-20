import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExampleService]
    })
    .compileComponents();
  });


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService);
  });

  fit('should be created', () => {
    let username ="karthick";
    let password = "123456";
    let query = "air";
    let data =  [{
      "username": "karthick",
      "email": "karthick@ltts.com",
      "password": "123456",
      "image": "../../../../assets/new.jpg",
      "confirmpassword": "123456",
      "id": 1
    }]

    const service: ExampleService = TestBed.get(ExampleService);
    service.getData();
    service.getallData();
    service.login(username,password);
    service.register(data);
    service.searchQuery(query);

    expect(service).toBeTruthy();
  });
});
