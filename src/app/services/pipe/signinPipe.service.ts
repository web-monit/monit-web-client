import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
*   the signin in pipe service created for passing data between
*   signin component and parent component to change page field
*/

export class SigninPipeService {

  private messageSource = new BehaviorSubject('none');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(data: string) {
    this.messageSource.next(data)
  }

}
