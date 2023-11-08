import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamesComponent } from './pages/games/games.component';
import { ArtigoComponent } from './components/artigo/artigo.component';
import { FormComponent } from './components/form/form.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SofthardComponent } from './pages/softhard/softhard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GamesComponent,
    ArtigoComponent,
    ContatoComponent,
    FormComponent,
    SofthardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
