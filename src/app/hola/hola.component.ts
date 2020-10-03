import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  // Propiedades
  public title = 'Componente Hola Mundo';
  public nombre = 'Juan Perez';

  // Constructor
  constructor() { }

  // Funcion a ejecutar por defecto
  ngOnInit(): void {
  }
}
