import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninService } from '../../../services/signin/signin.service';
import { GeneralService } from '../../../services/general/general.service';
import { Signin } from '../../../data/signin/sigin';
import { SigninResult } from '../../../data/signin/siginResponse';
import { SigninPipeService } from '../../../services/pipe/signinPipe.service';
import { AlerterService } from '../../../services/alerter/alerter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinData: Signin;
  signinResult: SigninResult;
  constructor(private signinService: SigninService, private generalService: GeneralService,
    private signinPipe: SigninPipeService, private alerter: AlerterService,
    private router: Router) { }

  // todo : send authentication data into the server and store it into authentication server

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.signinData = form.value;
    if (this.signinData.user_name == '') {
      this.alerter.alert('user name is none !');
    } else if (this.signinData.password == '') {
      this.alerter.alert('password is none !');
    } else {
      this.signinService.signin(this.signinData).subscribe((data) => this.setSigninInfo(data['result']));
    }
  };

  setSigninInfo(data: any) {
    this.signinResult = data;
    if (this.signinResult.result == true) {
      this.generalService.changeSigninStatus();
      this.generalService.setSigninData(this.signinResult);
      this.signinPipe.changeMessage("signin");
      this.router.navigate(['/dashboard']);
    } else {
      this.alerter.alert(this.signinResult.msg);
    }
  };

}
