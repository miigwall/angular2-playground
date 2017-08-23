import { Component } from '@angular/core';
import { routerTransition } from '../../animations/router';
import { hmTouchEvents } from 'angular-hammer';

@Component({
  selector: 'app-root',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  animations: [ routerTransition() ],
  host: { '[@routerTransition]': '' },
})
export class ExampleComponent {
  title = 'app';
}