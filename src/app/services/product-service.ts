import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadProducts();
  }

  public loadProducts() {
    console.log('Fetching products data');

    this.httpClient.get<Product[]>('assets/data/products.json')
    .subscribe({
        next: (response: Product[]) => this._products = response,
        error: (error) => console.error('Error fetching data', error),
      });
  }

  public get products(): Product[] {
    return this._products;
  }
}
