import { Injectable } from "@angular/core";
import { games, gameelemento} from "../data/games";
import { gamesDatabase} from "../data/gamesDatabase";

@Injectable({
    providedIn: 'root'
})
export class GamesService{
    private gamesDatabase : games[] = []

  constructor() {
    this.gamesDatabase = gamesDatabase
  }
  getAllGames() : games[] {
    console.log(this.gamesDatabase)
    return this.gamesDatabase
  }
  getGamesConteudo(id: number) : gameelemento[] {
    console.log(this.gamesDatabase)
    const games = this.gamesDatabase.filter(games => games.gamesId == id)
    if (games.length > 0) {
      console.log(id, games[0])
      return games[0].gamesElements
    };
    return [];
  }

}