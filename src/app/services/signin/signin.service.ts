import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signin } from '../../data/signin/sigin';
import { GlobalUrls } from '../../configs/url.conf';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  signin(data: Signin) {
    return this.http.put(GlobalUrls.baseUrl + GlobalUrls.userSignin, data);
  }

  getSigninStatus(token: any) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log(httpHeaders);
    return this.http.get(GlobalUrls.baseUrl + GlobalUrls.userSignin, { headers: httpHeaders });
  }


  signout(token: any) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(GlobalUrls.baseUrl + GlobalUrls.userSignin, { headers: httpHeaders });
  }

}
