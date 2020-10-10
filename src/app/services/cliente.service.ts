import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from '../model/cliente';

const endpoint = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  findAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(endpoint+'cliente');
  }
}
