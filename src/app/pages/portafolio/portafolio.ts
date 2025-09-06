import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-portafolio',
  imports: [CommonModule, RouterLink],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio {

  constructor(public productService: ProductService) {
  }

}
