import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public http: HttpClient) {}
  url: string = 'assets/data/data.json';
  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
