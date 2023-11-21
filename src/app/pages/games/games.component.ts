import { Component } from '@angular/core';
import { artigo } from 'src/app/data/artigo';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  artigoDatabase : artigo[] = []

  constructor (private artigoService : ArtigoService) {

  }

  ngOnInit() {
    this.artigoDatabase = this.artigoService.getAllArtigos()
  }
}
