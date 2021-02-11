import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private urlApi = environment.urlApi;
  // collection en private
  private collection$!: Observable<Client[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.collection$;
  }

  // set collection
  set collection(obs: Observable<Client[]>) {
    this.collection$ = obs;
  }

  // change state

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id
}
