import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InfoPageService } from '../../services/info-page-service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  private readonly _year: number;

  constructor(public infoPageService: InfoPageService) {
    this._year = new Date().getFullYear();
  }

  public get year() {
    return this._year;
  }
}
