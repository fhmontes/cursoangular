import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  public title: string;
  public admin: boolean;

  constructor() { 
    this.title = 'Componente NgTemplate';
    this.admin = true;
  }

  ngOnInit(): void {
  }

  cambiar(): void {
    this.admin = !this.admin;
  }
}
