import { Component, Input } from '@angular/core';

@Component({
    selector: 'artigoelemento',
    templateUrl: './artigo-elemento.component.html',
    styleUrls: ['./artigo-elemento.component.css']
})
export class ArtigoElementoComponent{
    @Input() elementoTipo = "";
    @Input() elementoConteudo = "";
}