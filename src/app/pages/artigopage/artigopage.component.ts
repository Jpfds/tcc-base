import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { artigoElemento } from 'src/app/data/artigo';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-artigopage',
  templateUrl: './artigopage.component.html',
  styleUrls: ['./artigopage.component.css']
})
export class ArtigopageComponent {
  artigoElementos: artigoElemento[] = []

  constructor (
    private route: ActivatedRoute,
    
    private artigoService : ArtigoService) {

    }

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id')

    const stringId = paramId != null ? paramId : '0';

    const parsedInt = parseInt(stringId);

    console.log(parsedInt)

    this.artigoElementos = this.artigoService.getArtigoConteudo(parsedInt)

    console.log(this.artigoElementos)
  }
}
