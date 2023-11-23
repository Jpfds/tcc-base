import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SofthardComponent } from './pages/softhard/softhard.component';
import { ArtigopageComponent } from './pages/artigopage/artigopage.component';
import { JogoComponent } from './pages/jogo/jogo.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'games',
    component: GamesComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  },
  {
    path:'softhard',
    component: SofthardComponent
  },
  {
    path:'artigo/:id',
    component:  ArtigopageComponent
  },
  {
    path:'game/:id',
    component: JogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
