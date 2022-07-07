import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesComponent } from './airlines/airlines.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { PhoneComponent } from './phone/phone.component';
import { RegisterComponent } from './register/register.component';
import { TailComponent } from './tail/tail.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'airlines',
    component: AirlinesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tail',
    component: TailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'phone',
    component:PhoneComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'otp',
    component: OtpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
