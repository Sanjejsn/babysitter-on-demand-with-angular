import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParentAdsComponent } from './parent-ads/parent-ads.component';
import { CssBabyComponent } from './header/css-baby/css-baby.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutAppComponent } from './about-app/about-app.component';
import { BabysitterAdsComponent } from './babysitter-ads/babysitter-ads.component';
import { BebysitterAdsListComponent } from './babysitter-ads/bebysitter-ads-list/bebysitter-ads-list.component';
import { BabysitterAdsItemComponent } from './babysitter-ads/bebysitter-ads-list/babysitter-ads-item/babysitter-ads-item.component';
import { BebysitterAdsDetailComponent } from './babysitter-ads/bebysitter-ads-detail/bebysitter-ads-detail.component';
import { SetAdComponent } from './set-ad/set-ad.component';
import { SitterAdComponent } from './set-ad/sitter-ad/sitter-ad.component';
import { ParentAdComponent } from './set-ad/parent-ad/parent-ad.component';
import { BebysitterService } from './babysitter-ads/bebysitter.service';
import { ParentAdsDetailComponent } from './parent-ads/parent-ads-detail/parent-ads-detail.component';
import { ParentAdsListComponent } from './parent-ads/parent-ads-list/parent-ads-list.component';
import { ParentAdsItemComponent } from './parent-ads/parent-ads-list/parent-ads-item/parent-ads-item.component';
import { ParentService } from './parent-ads/parent.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BebysitterAdsListComponent,
    BabysitterAdsItemComponent,
    ParentAdsComponent,
    ParentAdsItemComponent,
    CssBabyComponent,
    AboutAppComponent,
    BebysitterAdsDetailComponent,
    BabysitterAdsComponent,
    SetAdComponent,
    SitterAdComponent,
    ParentAdComponent,
    ParentAdsListComponent,
    ParentAdsDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    BebysitterService,
    ParentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
