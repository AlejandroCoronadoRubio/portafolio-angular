import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/InfoPage.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPageService {

  private _infoPage: InfoPage = {};

  constructor(private httpClient: HttpClient) {
      this.loadDataPage();
  }

  private loadDataPage() {
    console.log("Fetching info page");

      this.httpClient.get('assets/data/data-page.json')
      .subscribe((response: InfoPage) => { 
        this._infoPage = response;
      });
  }

  public get infoPage(): InfoPage {
    return this._infoPage;
  }
}
