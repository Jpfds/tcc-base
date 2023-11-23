import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gameelemento } from 'src/app/data/games';
import { GamesService } from 'src/app/services/game.service';


@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {
  gameelementos: gameelemento[] = []

  constructor (
    private route: ActivatedRoute,
    
    private GamesService : GamesService) {

    }
    ngOnInit() {
      const paramId = this.route.snapshot.paramMap.get('id')
  
      const stringId = paramId != null ? paramId : '0';
  
      const parsedInt = parseInt(stringId);
  
      console.log(parsedInt)
  
      this.gameelementos = this.GamesService.getGamesConteudo(parsedInt)
  
      console.log(this.gameelementos)
    }
  }

