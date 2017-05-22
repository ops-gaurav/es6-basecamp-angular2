import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


/**
 * define application routes
 */
const appRoutes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot (appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
