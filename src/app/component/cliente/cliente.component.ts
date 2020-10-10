import { Component, OnInit } from '@angular/core';

// Importar el servicio
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ ClienteService ]
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[];

  constructor(
    private _clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this._clienteService.findAllClientes().subscribe( result => {
      this.clientes = result;
      console.log(this.clientes);      
    });
  }
}
