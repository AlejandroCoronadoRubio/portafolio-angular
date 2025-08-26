import { Component } from '@angular/core';
import { InfoPageService } from '../../services/info-page-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  constructor(public infoPageService: InfoPageService) {

  }

}
