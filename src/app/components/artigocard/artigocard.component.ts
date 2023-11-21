import { Component, Input } from '@angular/core';

@Component({
    selector: 'artigocard',
    templateUrl: './artigocard.component.html',
    styleUrls: ['./artigocard.component.css']
})
export class ArtigoCardComponent {
    @Input() artigoCardImg : string = ""
    @Input() artigoCardImgAlt : string = ""
    @Input() artigoCardTitulo : string = ""
    @Input() artigoCardDescricao : string = ""
}