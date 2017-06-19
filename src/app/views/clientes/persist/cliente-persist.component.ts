import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {ClienteService} from '../../../sdk/cliente.service';
import {Cliente} from '../../../sdk/models/cliente';

@Component({
  selector: 'app-cliente-persist',
  templateUrl: './cliente-persist.component.html',
  styleUrls: ['./cliente-persist.component.css']
})
export class ClientePersistComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  uuid: string;
  editedItem: Cliente;
  enderecoId: string;

  constructor(private router: Router, private cliente: ClienteService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.uuid = this.route.snapshot.params['uuid'];
    this.cliente.get(this.uuid)
      .subscribe((cliente: Cliente) => {
        this.editedItem = cliente;
        this.enderecoId = cliente.endereco;
        this.form.setValue({
          nome: this.editedItem.nome,
          email: this.editedItem.email
        });
      });
  }

  onCancel() {
    this.router.navigate(['/clientes']);
  }

  onSubmit(form: NgForm) {
    this.cliente.save(this.uuid, form.value)
      .subscribe((cliente: Cliente) => {
        this.router.navigate(['/clientes'])
      });
  }

  onInsertAddress(){
    console.log('==> onInsertAddress');
  }

  onEditAddress(){
    console.log('==> onEditAddress');
  }
}
