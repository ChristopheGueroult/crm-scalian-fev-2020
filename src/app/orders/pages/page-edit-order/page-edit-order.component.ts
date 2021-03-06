import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public title = 'Edit Order';
  public item$!: Observable<Order>;
  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap(params => {
        const selectedId = Number(params.get('id'));
        return this.ordersService.getItemById(selectedId);
      })
    );
  }

  public update(item: Order): void {
    this.ordersService.updateItem(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }

}
