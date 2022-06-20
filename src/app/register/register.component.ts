import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExampleService } from '../example.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CustomValidators } from '../custom-validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectfiles: any;

  constructor(private apiservice : ExampleService, private router:Router, 
    private ToastService: NgToastService ) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required, 
      Validators.pattern("^[a-zA-Z0-9._%+-]{0,100}$"), Validators.minLength(5)]),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('',[Validators.required, 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required , Validators.minLength(5)]),
    confirmpassword : new FormControl('',[Validators.required])
  },
  {
    validators: [CustomValidators.match('password', 'confirmpassword')]
  }
  );


  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }



  register(){
    // this.registerForm.value.image =  this.selectfiles;
    this.apiservice.register(this.registerForm.value).subscribe(data =>{
      this.selectfiles = data;
    });
    this.ToastService.success({detail:"Success Message",summary:"Register Successful",duration:2000});
    setTimeout(() =>{
      this.router.navigate(['/login']);
    },2000);
  }

  redirect(){
    this.router.navigate(['/login']);
   }
}
