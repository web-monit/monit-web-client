import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// import base components to routing
import { LandingComponent } from './components/landing/landing/landing.component';
import { SigninComponent } from './components/singin_singup/signin/signin.component';
import { SignupComponent } from './components/singin_singup/signup/signup.component';
import { PageLoaderComponent } from './components/pageLoader/pageLoader.component';
import { Un_authorizedComponent } from './components/un_authorized/un_authorized.component';
import { ConfirmComponent } from './components/singin_singup/confirm/confirm.component';
import { AuthorizedComponent } from './components/dashbord/authorized/authorized.component';
import { Error404Component } from './components/error/error404/error404.component';
import { Error500Component } from './components/error/error500/error500.component';

// import services
import { GeneralService } from './services/general/general.service';
import { SignupService } from './services/signup/signup.service';
import { SigninService } from './services/signin/signin.service';
import { SigninPipeService } from './services/pipe/signinPipe.service';
import { AlerterService } from './services/alerter/alerter.service';
import { SignoutPipeService } from './services/pipe/signoutPipe.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    PageLoaderComponent,
    Un_authorizedComponent,
    ConfirmComponent,
    AuthorizedComponent,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // initialize services
  providers: [
    CookieService,
    GeneralService,
    SignupService,
    SigninService,
    SigninPipeService,
    AlerterService,
    SignoutPipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
