import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {CompanyData} from './shared/company-data';

import { AppComponent } from './app.component';
import {StockMaker} from './stock-maker/stock-maker.component';
import {PercentChangeComponent} from './shared/percent-change/percent-change.component';
import {StockModify} from './stock-maker/stock-modify.component';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    StockMaker,
    PercentChangeComponent,
    StockModify,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(CompanyData),
    RouterModule.forRoot([
      { path: 'stockmaker', component: StockMaker},
      { path: 'stockmaker/editstock/:id', component: StockModify},
      { path: 'welcome', component:WelcomeComponent}, 
      { path: '',redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
