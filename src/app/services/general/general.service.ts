import { Injectable } from '@angular/core';
import { SigninResult } from '../../data/signin/siginResponse';
import { CookieService } from 'ngx-cookie-service';
import { SigninService } from '../../services/signin/signin.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private cookie: CookieService, private signinService: SigninService) {
    console.log(this.cookie.get('signinStatus'))
  }

  getSiginStatus() {
    this.signinService.getSigninStatus(this.cookie.get('jwt')).subscribe((data) => this.dataHandler(data));
    if (this.cookie.get('signinStatus') == 'no') {
      return false;
    } else {
      return true;
    }
  }

  dataHandler(data: any) {
    console.log(data);
  }

  changeSigninStatus() {
    console.log('change status');
    if (this.getSiginStatus() == false) {
      this.cookie.delete('signinStatus');
      this.cookie.set('signinStatus', 'yes');
    } else {
      this.cookie.delete('signinStatus');
      this.cookie.set('signinStatus', 'no');
      this.cookie.delete('jwt');
      this.cookie.delete('ui');
      console.log('cookies removed')
    }
  }

  setSigninData(data: SigninResult) {
    this.cookie.set('jwt', data.access_token);
    this.cookie.set('ui', data.user_id);
  }

  getSigninData() {
    let data = {
      access_token: this.cookie.get('jwd'),
      user_id: this.cookie.get('ui')
    };
    return data;
  }

}
