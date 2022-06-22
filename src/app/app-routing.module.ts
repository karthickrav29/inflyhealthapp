import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesComponent } from './airlines/airlines.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
// import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
    canActivate:[AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'user/flight',
  //   component: FlightComponent,
  //   canActivate:[AuthGuard]
  // },
  {
    path:'user/airlines',
    component: AirlinesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'user/airlines/tail',
    component: TailComponent,
    canActivate:[AuthGuard]
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
