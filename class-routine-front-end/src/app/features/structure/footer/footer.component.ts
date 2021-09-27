import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { acConfig } from '../../../app.config'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public companyLogoUrl;
  public companyFaviconUrl;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    
  }

}
