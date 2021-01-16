import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterest } from './product-interest';

@Injectable({
  providedIn: 'root'
})
export class ProductInterestsService {

  baseUrl: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:4200/api/produtos";

    this.headers = new HttpHeaders().set('content-type', 'application/json')
                                    .set('Accept', 'application/json')
                                    .set('Access-Control-Allow-Origin', '*')
                                    .set('Access-Control-Allow-Headers', '*')
                                    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
  }

  getAll(product_id: number) {
    let url: string= this.baseUrl + "/" + product_id + "/interesses"
    return this.http.get<ProductInterest[]>(url, { headers: this.headers });
  }

  getOne(product_id: number, id: number) {
    let url: string = this.baseUrl + "/" + product_id + "/interesses/" + id;
    return this.http.get<ProductInterest>(url, { headers: this.headers });
  }

  insert(productInterest: ProductInterest) {
    let url: string = this.baseUrl + "/" + productInterest.product_id + "/interesses";
    return this.http.post<any>(url, productInterest, { headers: this.headers });
  }

  update(productInterest: ProductInterest) {
    let url: string = this.baseUrl + "/" + productInterest.product_id + "/interesses/" + productInterest.id;
    return this.http.put<any>(url, productInterest, { headers: this.headers });
  }

  delete(product_id: number, id: number) {
    let url: string = this.baseUrl + "/" + product_id + "/interesses/" + id;
    return this.http.delete<any>(url, { headers: this.headers });
  }
}
