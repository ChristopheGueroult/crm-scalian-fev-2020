import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public item$: BehaviorSubject<Order> = new BehaviorSubject(new Order());
  private urlApi = environment.urlApi;
  // collection en private
  private collection$: Subject<Order[]> = new Subject<Order[]>();
  constructor(private http: HttpClient) {
    // this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  public refreshSubject(): void {
    this.http.get<Order[]>(`${this.urlApi}/orders`).subscribe(datas => {
      // this.item$.next(datas[0]);
      this.item$.next(datas[0]);

      this.collection$.next(datas);
    });
  }

  // get collection
  get collection(): Subject<Order[]> {
    return this.collection$;
  }

  // set collection
  // set collection(obs: Observable<Order[]>) {
  //   this.collection$ = obs;
  // }

  // change state

  // update item in collection
  public updateItem(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // add item in collection
  public addItem(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // delete item in collection
  public deleteItem(item: Order): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${item.id}`);
  }

  // get item by id
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
