import { Component, NgZone, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  email = "frontenddeveloperangular@gmail.com";
  password ="123456";
  phoneNumber: any;
  reCaptchaVerifier!: any;

  constructor(private router: Router, private ngZone: NgZone, private afAuth : AngularFireAuth) { }

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


  // signUp(email: string, password: string) {
  //   return this.afAuth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((result) => {
  //     this.SendVerificationMail(); // Sending email verification notification, when new user registers
  //   })
  //   .catch((error) => {
  //     window.alert(error.message);
  //   });
    
  // }

    
  // SendVerificationMail() {
  //   return this.afAuth.currentUser
  //     .then((user) => {
  //       return user.sendEmailVerification();
  //     })
      
  // }

}
