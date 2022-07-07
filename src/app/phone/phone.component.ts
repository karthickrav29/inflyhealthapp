import { Component, NgZone, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phoneNumber: any;
  reCaptchaVerifier!: any;

  constructor(private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.phoneNumber = localStorage.getItem("mobile");
    this.getOTP(this.phoneNumber);
  }

  getOTP(phoneNumber:any) {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );
        this.ngZone.run(() => {
          localStorage.setItem("isUserLoggedIn", "true");
          this.router.navigate(['/otp']);
        });
      })
      
  }

}
