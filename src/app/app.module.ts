import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CssBabyComponent } from './header/css-baby/css-baby.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutAppComponent } from './about-app/about-app.component';
import { BabysitterAdsComponent } from './babysitter-ads/babysitter-ads.component';
import { BabysitterAdsDetailComponent } from './babysitter-ads/babysitter-ads-detail/babysitter-ads-detail.component';
import { SetAdComponent } from './set-ad/set-ad.component';
import { SitterAdComponent } from './set-ad/sitter-ad/sitter-ad.component';
import { ParentAdComponent } from './set-ad/parent-ad/parent-ad.component';
import { ParentAdsDetailComponent } from './parent-ads/parent-ads-detail/parent-ads-detail.component';
import { ParentService } from './parent-ads/parent.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentAdsListComponent } from './parent-ads/parent-ads-list.component';
import { ParentAdsItemComponent } from './parent-ads/parent-ads-item/parent-ads-item.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BabysitterService } from './babysitter-ads/babysitter.service';
import { BabysitterAdsItemComponent } from './babysitter-ads/babysitter-ads-list/babysitter-ads-item/babysitter-ads-item.component';
import { BabysitterAdsListComponent } from './babysitter-ads/babysitter-ads-list/babysitter-ads-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BabysitterAdsListComponent,
    BabysitterAdsItemComponent,
    ParentAdsItemComponent,
    CssBabyComponent,
    AboutAppComponent,
    BabysitterAdsDetailComponent,
    BabysitterAdsComponent,
    SetAdComponent,
    SitterAdComponent,
    ParentAdComponent,
    ParentAdsListComponent,
    ParentAdsDetailComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule

  ],
  providers: [
    BabysitterService,
    ParentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
