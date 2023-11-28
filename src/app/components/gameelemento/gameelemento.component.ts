import { Component, Input } from '@angular/core';

@Component({
  selector: 'gameelemento',
  templateUrl: './gameelemento.component.html',
  styleUrls: ['./gameelemento.component.css']
})
export class GameelementoComponent {
  @Input() elementoTipo = "";
  @Input() elementoConteudo = "";
  @Input() elementoAlt = "";

  screen = window.matchMedia("(max-width:780px)")
  
  
}
