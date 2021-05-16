import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general/general.service';
import { SignoutPipeService } from '../../../services/pipe/signoutPipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {

  constructor(private generalService: GeneralService, private signouPipe: SignoutPipeService,
    private route: Router) { }

  ngOnInit() {
    let status = this.generalService.getSiginStatus();
    console.log('status is : ' + status);
    if (status == false) {
      this.signouPipe.changeMessage("error-500");
      this.route.navigate(['/error-500']);
    }
  }

  logout() {
    this.generalService.changeSigninStatus();
    this.signouPipe.changeMessage("signout");
    this.route.navigate(['/']);
  }

}
