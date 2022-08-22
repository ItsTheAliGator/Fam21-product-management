import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsClientService } from './products-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsClient: ProductsClientService) {}

  ngOnInit(): void {
    this.productsClient
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  onDelete(id: number) {
    this.productsClient.deleteProduct(id);
  }
}
