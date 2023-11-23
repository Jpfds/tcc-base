import { Component } from '@angular/core';
import { games } from 'src/app/data/games';
import { GamesService } from 'src/app//services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  gamesDatabase : games[] = []

  constructor (private GamesService : GamesService) {

  }

  ngOnInit() {
    this.gamesDatabase = this.GamesService.getAllGames()
  }
}
