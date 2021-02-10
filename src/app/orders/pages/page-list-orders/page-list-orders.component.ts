import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public title = 'All orders';
  public collection!: Order[];
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((datas) => {
      this.collection = datas;
      console.log(datas);

    });
  }

  ngOnInit(): void {
  }

}
