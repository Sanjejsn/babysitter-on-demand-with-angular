import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BebysitterAdsListComponent } from './bebysitter-ads-list/bebysitter-ads-list.component';
import { ParentAdsComponent } from './parent-ads/parent-ads.component';
import { AboutAppComponent } from './about-app/about-app.component';


const appRoutes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'babysitter-ads', component: BebysitterAdsListComponent },
    { path: 'parent-ads', component: ParentAdsComponent },
    { path: 'info', component: AboutAppComponent }

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
