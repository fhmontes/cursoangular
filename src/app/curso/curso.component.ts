import { Component, OnInit } from '@angular/core';
// Importar el modelo Profesor
import { Profesor } from '../model/profesor';
import { Estudiante } from '../model/estudiante';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  // Propiedades del componente
  public title: string;
  public prof: Profesor;
  public mostrarProfesor: boolean;
  public estudiantes: Array<Estudiante>;

  constructor() {
    this.title = 'Componente Curso';
    this.prof = new Profesor('Juan', 6500.50, true);
    this.mostrarProfesor = true;
    this.estudiantes = [
      new Estudiante('Mateo', 36, 90),
      new Estudiante('Ana', 16, 40),
      new Estudiante('Pedro', 24, 52),
      new Estudiante('Lucas', 18, 88),
    ];
  }

  ngOnInit(): void {
    console.log(this.prof);
    console.log(this.estudiantes);    
  }

  cambiarEstado(valor: boolean): void {
    this.mostrarProfesor = valor;
  }
}
