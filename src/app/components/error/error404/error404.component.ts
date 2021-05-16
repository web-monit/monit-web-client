import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general/general.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
  }

}
