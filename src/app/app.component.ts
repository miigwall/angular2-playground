import { Component, Directive, OnChanges, OnDestroy, AfterContentInit, QueryList, ChangeDetectorRef, ContentChildren, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { routerTransition } from '../animations/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [ routerTransition() ],
  host: { '[@routerTransition]': '' },
})
export class AppComponent {
  public q: string;

  constructor(private router: Router) {}

  onSearchSubmit(f: NgForm) {
  	if (f.value.searchq) {
  	   this.router.navigate([ '/search/', f.value.searchq ]);
  	}
  }
}