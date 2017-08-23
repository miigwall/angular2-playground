import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ErrorComponent } from '../components/error/error.component';
import { SearchComponent } from '../components/search/search.component';
import { ExampleComponent } from '../components/example/example.component';

import { HttpService } from '../services/http.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:q', component: SearchComponent },
  { path: 'example', component: ExampleComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ErrorComponent,
    ExampleComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, { 
      	enableTracing: true,
      }
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ 
    HttpService,
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule {}
