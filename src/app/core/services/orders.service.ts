import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private urlApi = environment.urlApi;
  // collection en private
  private collection$!: Observable<Order[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // set collection
  set collection(obs: Observable<Order[]>) {
    this.collection$ = obs;
  }

  // change state

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id
}
