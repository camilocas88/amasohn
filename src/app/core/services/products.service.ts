import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: Product[] = [];
  private END_POINT: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.END_POINT);
  }

  getProduct(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.END_POINT}/${id}`);
  }
}
