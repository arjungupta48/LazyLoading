import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

// https://scotch.io/tutorials/lazy-loading-in-angular-v2

// # create the app
// ng new lazyload-app --routing

// # create the home component
// ng g component home

// # create the dashboard module
// ng g module dashboard --routing

// # create the dashboard home page
// ng g component dashboard/dashboard-home

// modify dashboard-routing.module.ts | app.component.html | app-routing.odule.ts