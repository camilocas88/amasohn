import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  isDataLoaded = false;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): any {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.isDataLoaded = true;
    });
  }

  public clickProduct(): void {
    console.log('product');
  }
}
