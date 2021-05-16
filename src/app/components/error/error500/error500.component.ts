import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general/general.service';

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.css']
})
export class Error500Component implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
  }

}
