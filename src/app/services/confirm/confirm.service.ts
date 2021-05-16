import { Injectable } from '@angular/core';
import { GlobalUrls } from '../../configs/url.conf';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private http: HttpClient) { }

  confirm(data) {
    return this.http.put(GlobalUrls.baseUrl + GlobalUrls.userConfirm, data);
  }

}
