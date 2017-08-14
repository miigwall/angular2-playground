import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/error/error.component';
import { SearchComponent } from '../components/search/search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:q', component: SearchComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, { 
      	enableTracing: true 
      }
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
