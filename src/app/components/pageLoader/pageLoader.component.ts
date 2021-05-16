import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-pageLoader',
  templateUrl: './pageLoader.component.html',
  styleUrls: ['./pageLoader.component.css']
})
export class PageLoaderComponent implements OnInit {

  iframe_loader = "<iframe id=\"iframe\" src=\"https://angular.io/guide/pipes\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>";
  data;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.data = this.sanitizer.bypassSecurityTrustHtml(this.iframe_loader);
  }

}
