import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';
import { CommentOrderComponent } from './components/comment-order/comment-order.component';



@NgModule({
  declarations: [PageListOrdersComponent, PageEditOrderComponent, PageAddOrderComponent, FormOrderComponent, DetailOrderComponent, CommentOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
