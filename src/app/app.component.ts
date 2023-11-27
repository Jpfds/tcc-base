import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tcc-base';
    apiLoaded= false;

    ngOnInit() {
      if (!this.apiLoaded){
        const tag = document. createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded
      }
    }

}
