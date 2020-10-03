import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HolaComponent } from './hola/hola.component';

// Definir rutas de la aplicacion
const routes: Routes = [  
  { path: 'hola', component: HolaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
