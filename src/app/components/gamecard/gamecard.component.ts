import { Component, Input } from '@angular/core';

@Component({
  selector: 'gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent {
    @Input() gameCardImg : string = ""
    @Input() gameCardImgAlt : string = ""
    @Input() gameCardTitulo : string = ""
    @Input() gameCardDescricao : string = ""
}
