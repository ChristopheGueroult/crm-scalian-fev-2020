import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  // example d'observable perso
  private testObservablePerso: Observable<any> = new Observable<any>((listXofSubscribes) => {
    listXofSubscribes.next('string');
  });
  // example de variable pour les unsubscribe
  private sub!: Subscription;
  public title = 'All orders';
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public headers!: string[];
  constructor(private ordersService: OrdersService) {
    // this.ordersService.collection.subscribe((datas) => {
    //   this.collection = datas;
    //   // console.log(datas);
    // });
    this.collection$ = this.ordersService.collection;
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }

  ngOnInit(): void {
    this.sub = this.testObservablePerso.subscribe(
      (datas) => {
        console.log(datas);
      }
    );
  }

  public openPopUp(): void {
    console.log('open popup works !');
  }

  ngOnDestroy(): void {
    // exemple de unsubscribe()
    this.sub.unsubscribe();
  }

}
