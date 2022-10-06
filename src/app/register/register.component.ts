import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExampleService } from '../example.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CustomValidators } from '../custom-validators';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectfiles: any;
  user : User = new User();

  constructor(private apiservice: ExampleService, private router: Router,
    private ToastService: NgToastService) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.pattern("^[a-zA-Z0-9._%+-]{0,100}$"), Validators.minLength(5)]),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', [Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    mobile: new FormControl('+91', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmpassword: new FormControl('', [Validators.required])
  },
    {
      validators: [CustomValidators.match('password', 'confirmpassword')]
    }
  );


  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  register() {
    this.apiservice.register(this.registerForm.value).subscribe(data => {
      this.selectfiles = data;
    });
    this.ToastService.success({ detail: "Success Message", summary: "Register Successful", duration: 2000 });
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  redirect() {
    this.router.navigate(['/login']);
  }

  // SignUp(email : any, password : any) {
  //   return this.afAuth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       this.SendVerificationMail();
  //     })
  //     .catch((error) => {
  //       window.alert(error.message);
  //     });
  // }



}
