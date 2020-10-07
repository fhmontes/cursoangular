import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnInit {

  public color: string;

  constructor() { 
    this.color = 'red';
  }

  ngOnInit(): void {
  }

  cambiarColor(color: string): void{
    this.color = color;
  }
}
