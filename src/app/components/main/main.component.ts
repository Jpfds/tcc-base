import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() img: string;
  @Input() descricao: string;

  constructor () {
    this.img = ""
    this.descricao = ""
  }
}
