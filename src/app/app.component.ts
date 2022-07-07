import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idleState: any;
  timedOut = false;
  userlogin: any;

  @ViewChild('childModal', { static: false })
  childModal!: ModalDirective;

  constructor(private router: Router,
    private idle: Idle) {

  }


  ngOnInit() {
    this.idle.setIdle(600000);
    this.idle.setTimeout(10);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.'
      this.reset();
    });
    this.idle.onTimeout.subscribe(() => {
      this.childModal.hide();
      this.idleState = 'Timed out!';
      this.timedOut = true;
      localStorage.setItem("isUserLoggedIn", "false");
      this.router.navigate(['/login']);
    });
    this.idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!'
      this.childModal.show();
    });
    this.userlogin = localStorage.getItem('isUserLoggedIn');
    this.idle.onTimeoutWarning.subscribe((countdown) => {
      if (this.userlogin === "true") {
        this.idleState = 'You will time out in ' + countdown + ' seconds!'
      }
    });
    if (this.userlogin === "true") {
      this.idle.watch()
      this.timedOut = false;
    }
    else {
      this.idle.stop();
    }
  }

  hideChildModal() {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {
    this.childModal.hide();
    localStorage.setItem("isUserLoggedIn", "false");
    this.router.navigate(['/home']);
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }

}

