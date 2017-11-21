import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NativeElementComponent } from './native-element/native-element.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'native',
    component: NativeElementComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NativeElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
