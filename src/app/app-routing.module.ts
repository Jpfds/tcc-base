import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { ContatoComponent } from './pages/contato/contato.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'games',
    component: GamesComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
