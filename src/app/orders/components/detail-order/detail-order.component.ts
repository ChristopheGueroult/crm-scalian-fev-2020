import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {
  public item$ = this.ordersService.item$;
  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {

  }

}
