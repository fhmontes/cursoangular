import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importar archivo de rutas
import { AppRoutingModule } from './app-routing.module';
// Importar modulo para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Importar nuestro filtro
import { CalculadoraPipe } from './pipes/calculadora.pipe';

import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';
import { EstiloComponent } from './component/estilo/estilo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { HeaderComponent } from './template/header/header.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { ProductoComponent } from './component/producto/producto.component';
import { FiltrosComponent } from './component/filtros/filtros.component';
import { PlantillaComponent } from './component/plantilla/plantilla.component';
import { CocheComponent } from './component/coche/coche.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PersonaComponent,
    CursoComponent,
    EstiloComponent,
    PageNotFoundComponent,
    HomeComponent,
    ParametrosComponent,
    HeaderComponent,
    NavigationComponent,
    ProductoComponent,
    FiltrosComponent,
    CalculadoraPipe,
    PlantillaComponent,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // <-- Agregar archivo de rutas
    FormsModule       // <-- Agregar modulo para formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
