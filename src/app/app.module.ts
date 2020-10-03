import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importar archivo de rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { PersonaComponent } from './persona/persona.component';
import { CursoComponent } from './curso/curso.component';
import { EstiloComponent } from './estilo/estilo.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    PersonaComponent,
    CursoComponent,
    EstiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- Agregar archivo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
