import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalUrls } from '../../configs/url.conf';
import { Signup } from '../../data/signup/signup';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  doSignup(signupData: Signup) {
    return this.http.put(GlobalUrls.baseUrl + GlobalUrls.userRegistery, signupData);
  }

}
