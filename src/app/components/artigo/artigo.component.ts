import { Component, Input } from '@angular/core';

@Component({
  selector: 'artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent {

  @Input() artigoTitulo = "";
  @Input() artigoImagem = ""; 
  @Input() artigoDescricao = "";
  @Input() artigoDescricao1 = "";
  @Input() artigoDescImage = "";
  @Input() artigoImageAlt="";

  constructor(){
  }

}
