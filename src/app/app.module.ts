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
import { JogoComponent } from './pages/jogo/jogo.component';
import { ArtigoCardComponent } from './components/artigocard/artigocard.component';
import { ArtigoElementoComponent } from './components/artigoelemento/artigo-elemento.component';
import { ArtigopageComponent } from './pages/artigopage/artigopage.component';
import { GamecardComponent } from './components/gamecard/gamecard.component';
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
    SofthardComponent,
    JogoComponent,
    ArtigoCardComponent,
    ArtigoElementoComponent,
    ArtigopageComponent,
    GamecardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
