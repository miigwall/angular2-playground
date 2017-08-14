import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  private q: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  	   this.q = params['q']
  	})
  }
}