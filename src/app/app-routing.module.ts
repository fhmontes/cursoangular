import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HolaComponent } from './hola/hola.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';
import { EstiloComponent } from './component/estilo/estilo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { ProductoComponent } from './component/producto/producto.component';
import { FiltrosComponent } from './component/filtros/filtros.component';
import { PlantillaComponent } from './component/plantilla/plantilla.component';
import { CocheComponent } from './component/coche/coche.component';
import { ClienteComponent } from './component/cliente/cliente.component';

// Definir rutas de la aplicacion
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },  
  { path: 'hola', component: HolaComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'estilo', component: EstiloComponent },
  { path: 'parametros/:param_nombre', component: ParametrosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'filtros', component: FiltrosComponent },
  { path: 'plantilla', component: PlantillaComponent },
  { path: 'coche', component: CocheComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
