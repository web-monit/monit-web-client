import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlerterService {

  constructor() { }

  alert(message) {
    alert(message);
  }

}
