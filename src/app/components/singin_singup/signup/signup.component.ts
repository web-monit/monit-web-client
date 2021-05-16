import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Signup } from '../../../data/signup/signup';
import { SignupService } from '../../../services/signup/signup.service';
import { Router } from '@angular/router';
import { AlerterService } from '../../../services/alerter/alerter.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupData: Signup;
  constructor(private signupService: SignupService, private router: Router, private alerter: AlerterService) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.signupData = form.value;
    this.checkForm();
  };

  checkForm() {
    // this function will check the form data to be valid
    if (this.signupData.user_name == '') {
      this.alerter.alert("user name is none !");
    } else if (this.signupData.email_address == '') {
      this.alerter.alert("email is none !");
    } else if (this.signupData.phone_number == '') {
      this.alerter.alert("phone number is none !");
    } else if (this.signupData.password != this.signupData.repassword) {
      this.alerter.alert("user name and password don't mach !");
    } else {
      this.signupService.doSignup(this.signupData).subscribe((data) => this.checkResult(data));
    }
  }

  checkResult(data) {
    if (data['status'] == true) {
      let registery_result = {
        user_id: data['result']['user_id']
      };
      this.changePageRoute(registery_result);
    } else {
      this.alerter.alert(data['result']);
    }
  }

  changePageRoute(data) {
    this.router.navigate(['/confirm', data.user_id]);
  }

}
