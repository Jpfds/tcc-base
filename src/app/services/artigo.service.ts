import { Injectable } from '@angular/core';
import { artigo, artigoElemento } from '../data/artigo';
import { artigoDatabase } from '../data/artigoDatabase';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
  private artigoDatabase : artigo[] = []

  constructor() {
    this.artigoDatabase = artigoDatabase
  }
  getAllArtigos() : artigo[] {
    console.log(this.artigoDatabase)
    return this.artigoDatabase
  }

  getArtigoConteudo(id: number) : artigoElemento[] {
    console.log(this.artigoDatabase)
    const artigo = this.artigoDatabase.filter(artigo => artigo.artigoId == id)
    if (artigo.length > 0) {
      console.log(id, artigo[0])
      return artigo[0].artigoElements
    };
    return [];
  }
}
