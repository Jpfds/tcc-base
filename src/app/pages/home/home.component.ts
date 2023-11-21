import { Component } from '@angular/core';
import { artigo } from 'src/app/data/artigo';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  artigoDatabase : artigo[] = []

  constructor (private artigoService : ArtigoService) {

  }

  ngOnInit() {
    this.artigoDatabase = this.artigoService.getAllArtigos()
  }
}
