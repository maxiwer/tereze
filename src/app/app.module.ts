import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainRouting } from './main.routing';
import { MainComponent } from './main/main.component';
import { TopPicksComponent } from './top-picks/top-picks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TopPicksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MainRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
