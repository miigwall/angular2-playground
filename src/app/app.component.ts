import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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