import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  public title: string;
  public nombre: string;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.title = 'Paso de Parametros';
  }

  ngOnInit(): void {
    // Obtener dato de la url
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('param_nombre');
    });
  }

}
