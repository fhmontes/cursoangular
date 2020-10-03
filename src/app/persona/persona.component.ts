import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // Atributos
  public title;
  public nombre: string;
  public edad: number;
  public mayorEdad: boolean;
  public comodin: any;
  public profesiones: Array<String>;
  public miArray: Array<any>;

  // Constructor: Inicializa propiedades
  constructor() { 
    this.title = 'Componente Persona';
    this.nombre = 'Juan';
    this.edad = 45;
    this.mayorEdad = true;
    this.comodin = 100;
    this.profesiones = ['Carpintero', 'Pintor', 'Fontanero'];
    this.miArray = ['Rojo', 48, true];
  }

  // Metodo inicial
  ngOnInit(): void {
    console.log(this.nombre);
    this.saludar(this.nombre);
    console.log(this.verificaEdad());
    
  }

  saludar(nombre): void{
    console.log('Buenas noches ' + nombre);
  }

  verificaEdad(): string{
    var obs = this.mayorEdad?'Mayor de edad':'Menor de edad';
    return obs;
  }
}
