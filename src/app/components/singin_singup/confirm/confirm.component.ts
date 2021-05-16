import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, Form } from '@angular/forms';
import { ConfirmService } from '../../../services/confirm/confirm.service';
import { AlerterService } from '../../../services/alerter/alerter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  private user_id: string;
  constructor(private route: ActivatedRoute, private confirmService: ConfirmService, private alerter: AlerterService,
    private router: Router) { }

  ngOnInit() {
    this.user_id = this.route.params['value']['user_id'];
  }

  submitForm(form: NgForm) {
    let data = form.value;
    if (data['confirm_code'] == '') {
      this.alerter.alert('confirm code is none !');
    } else {
      data['user_id'] = this.user_id;
      this.confirmService.confirm(data).subscribe((data) => this.check(data['result']));
    }
  };

  check(data) {
    if (data['result'] == false) {
      this.alerter.alert(data['msg']);
    } else {
      this.router.navigate(['/signin']);
    }
  }

}
