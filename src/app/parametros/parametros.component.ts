import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  public title: string;
  public nombre: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.title = 'Paso de Parametros';
  }

  ngOnInit(): void {
    // Obtener dato de la url
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('param_nombre');
    });
  }

  redirigir1(): void{
    this.router.navigate(['/home']);
  }

  redirigir2(): void{
    this.router.navigate(['/parametros', 'Alejandra']);
  }
}
