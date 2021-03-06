import { Component } from '@angular/core';
import { routerTransition } from '../../animations/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ routerTransition() ],
  host: { '[@routerTransition]': '' },
})
export class HomeComponent {
  title = 'app';
}