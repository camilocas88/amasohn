import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | any;
  isDataLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productsService.getProduct(id).subscribe((product) => {
        this.product = product;
        this.isDataLoaded = true;
      });
    });
  }
}
