import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BebysitterAdsListComponent } from './bebysitter-ads-list/bebysitter-ads-list.component';
import { BabysitterAdsItemComponent } from './bebysitter-ads-list/babysitter-ads-item/babysitter-ads-item.component';
import { ParentAdsComponent } from './parent-ads/parent-ads.component';
import { ParentAdsItemComponent } from './parent-ads/parent-ads-item/parent-ads-item.component';
import { CssBabyComponent } from './header/css-baby/css-baby.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutAppComponent } from './about-app/about-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BebysitterAdsListComponent,
    BabysitterAdsItemComponent,
    ParentAdsComponent,
    ParentAdsItemComponent,
    CssBabyComponent,
    AboutAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
