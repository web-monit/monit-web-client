import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignoutPipeService {

  private messageSource = new BehaviorSubject('none');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(data: string) {
    this.messageSource.next(data)
  }

}
