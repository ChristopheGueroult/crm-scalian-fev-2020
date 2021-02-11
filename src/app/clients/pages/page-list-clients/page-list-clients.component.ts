import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public title = 'All Clients';
  public collection!: Client[];
  public headers!: string[];
  constructor(private clientsService: ClientsService) {
    this.clientsService.collection.subscribe((datas) => {
      this.collection = datas;
    });
    this.headers = [
      'Name',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }

  ngOnInit(): void {
  }
}
