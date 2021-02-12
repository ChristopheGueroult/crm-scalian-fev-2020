import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  private subj = new Subject<any>();
  private behav = new BehaviorSubject<any>('Jules');
  // example d'observable perso
  private testObservablePerso: Observable<any> = new Observable<any>((listXofSubscribes) => {
    listXofSubscribes.next('string');
  });
  // example de variable pour les unsubscribe
  private sub!: Subscription;
  public title = 'All orders';
  // public collection!: Order[];
  public collection$: Subject<Order[]>;
  public headers!: string[];
  constructor(
    private ordersService: OrdersService,
    private router: Router,
  ) {
    // this.ordersService.collection.subscribe((datas) => {
    //   this.collection$.next(datas);
    //   // console.log(datas[0]);
    // });
    this.ordersService.refreshSubject();
    this.collection$ = this.ordersService.collection;
    this.headers = [
      'Action',
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

    // ex d'utilisatin de Subject
    this.subj.subscribe((data) => {
      console.log(data);
    });
    this.subj.next('christophe');
    this.subj.next('aby');
    // ex d'utilisatin de BejaviorSubject
    this.behav.subscribe((data) => {
      console.log(data);
    });
    this.behav.next('Audrey');
    this.behav.next('Khalil');
  }

  public openPopUp(): void {
    console.log('open popup works !');
  }

  public delete(item: Order): void {
    this.ordersService.deleteItem(item).subscribe((data) => {
      // this.ordersService.collection.subscribe((datas) => {
      //   this.collection$.next(datas);
      // });
      this.ordersService.refreshSubject();
    });
  }

  public goToEdit(item: Order): void {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  public getDetail(item: Order): void {
    this.ordersService.item$.next(item);
  }

  ngOnDestroy(): void {
    // exemple de unsubscribe()
    this.sub.unsubscribe();
  }

}
