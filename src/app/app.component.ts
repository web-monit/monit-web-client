import { Component, OnInit } from '@angular/core';

// services
import { GeneralService } from './services/general/general.service';
import { SigninPipeService } from './services/pipe/signinPipe.service';
import { SignoutPipeService } from './services/pipe/signoutPipe.service';
import { AlerterService } from './services/alerter/alerter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  status: boolean;
  constructor(private generalService: GeneralService, private signinPipe: SigninPipeService,
    private signoutPipe: SignoutPipeService, private alerter: AlerterService) { };

  ngOnInit() {
    this.status = this.generalService.getSiginStatus();
    this.signinPipe.currentMessage.subscribe((data) => this.changeStatus(data));
    this.signoutPipe.currentMessage.subscribe((data) => this.changeStatus(data));
  }

  changeStatus(data: any) {
    if (data == "signin") {
      this.signinPipe.changeMessage("none");
      this.alerter.alert(data);
      this.ngOnInit();
    } else if (data == "signout") {
      this.signoutPipe.changeMessage("none");
      this.alerter.alert(data);
      this.ngOnInit();
    }
  }

}
