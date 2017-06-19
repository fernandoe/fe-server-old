import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Router} from '@angular/router';

import {Cliente} from '../../../sdk/models/cliente';
import {ClienteService} from '../../../sdk/cliente.service';
import {Pagination} from '../../../sdk/models/pagination';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];
  pages = 10;
  previousPages = [];
  currentPage = 0;
  nextPages = [];
  pagination;

  constructor(private cliente: ClienteService, private router: Router) {
  }

  novoCliente() {
    this.cliente.create()
      .subscribe((cliente: Cliente) => {
        this.router.navigate(['clientes', cliente.uuid]);
      });
  }

  ngOnInit() {
    this.search(1)
  }

  changePage(page) {
    this.search(page);
  }

  search(page) {
    this.cliente.search(page)
      .subscribe(
        (pagination: Pagination) => {
          this.clientes = pagination.items;
          this.pages = pagination.getPages();
          this.previousPages = pagination.getPreviousPages();
          this.currentPage = pagination.getCurrentPage();
          this.nextPages = pagination.getNextPages();
        }
      );
  }

  onEdit(uuid: string) {
    this.router.navigate(['clientes', uuid])
  }
}
