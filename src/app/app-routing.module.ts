import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import base components to routing
import { LandingComponent } from './components/landing/landing/landing.component';
import { SigninComponent } from './components/singin_singup/signin/signin.component';
import { SignupComponent } from './components/singin_singup/signup/signup.component';
import { PageLoaderComponent } from './components/pageLoader/pageLoader.component';
import { ConfirmComponent } from './components/singin_singup/confirm/confirm.component';
import { AuthorizedComponent } from './components/dashbord/authorized/authorized.component';
import { Error404Component } from './components/error/error404/error404.component';
import { Error500Component } from './components/error/error500/error500.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'page-loader', component: PageLoaderComponent },
  { path: 'confirm/:user_id', component: ConfirmComponent },
  { path: 'dashboard', component: AuthorizedComponent },
  { path: 'error-500', component: Error500Component },
  { path: 'error-404', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
