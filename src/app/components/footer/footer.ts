import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  private readonly _year: number;

  constructor() {
    this._year = new Date().getFullYear();
  }

  public get year() {
    return this._year;
  }
}
