import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/InfoPage.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPageService {

  private _infoPage: InfoPage = {};

  constructor(private httpClient: HttpClient) {
      console.log("InfoPage service ready");

      this.httpClient.get('assets/data/data-page.json')
      .subscribe((response: InfoPage) => { 
        this._infoPage = response;
        console.log(this.infoPage)
      });
  }

  public get infoPage(): InfoPage {
    return this._infoPage;
  }
}
