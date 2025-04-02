import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl = 'https://fake-store-api.mock.beeceptor.com/api/products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any[]> {
    console.log('Fetching products from API...');
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }
}
