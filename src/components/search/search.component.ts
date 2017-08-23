import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../animations/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [ routerTransition() ],
  host: { '[@routerTransition]': '' },
})
export class SearchComponent {
  private q: string;
  private sub: any;

  public searchResults: string[];

  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
  	   this.q = params['q']
       this.http.doDgSearch(this.q, (data) => {
         this.searchResults = [];
         for (let i = 0; i < data.RelatedTopics.length; i++) {
           if ("Result" in data.RelatedTopics[i]) {
             this.searchResults.push(data.RelatedTopics[i])
           }
         }
       })
  	})
  }
}