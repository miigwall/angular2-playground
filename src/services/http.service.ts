import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  doDgSearch(q, callback) {
  	this.http.get('http://api.duckduckgo.com/?q=' + q + '&format=json').subscribe(data => {
  	   callback(data)
  	})
  }
}