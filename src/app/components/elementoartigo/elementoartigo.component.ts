import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elementoartigo',
  templateUrl: './elementoartigo.component.html',
  styleUrls: ['./elementoartigo.component.css']
})
export class ElementoartigoComponent {
  @Input() elementCardImg : string = ""
  @Input() elementCardImgAlt : string = ""
  @Input() elementCardTitle : string = ""
  @Input() elementCardDesc : string = ""
}
