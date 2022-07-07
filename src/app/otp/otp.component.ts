import { Component, NgZone, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otp!: string;
  verify: any;

  constructor(private router: Router, private ngZone: NgZone) { }

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };


  ngOnInit(): void {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
  }

  onOtpChange(otp: any) {
    this.otp = otp;
  }

  handleClick() {
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          localStorage.setItem("isUserLoggedIn", "true");
          this.router.navigate(['/user']);
        });
      })
      
  }

}
