import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importar archivo de rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';
import { EstiloComponent } from './estilo/estilo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ParametrosComponent } from './parametros/parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PersonaComponent,
    CursoComponent,
    EstiloComponent,
    PageNotFoundComponent,
    HomeComponent,
    ParametrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- Agregar archivo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
