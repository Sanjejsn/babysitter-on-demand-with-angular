import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ParentAdsComponent } from './parent-ads/parent-ads.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { CssBabyComponent } from './header/css-baby/css-baby.component';
import { BebysitterAdsListComponent } from './babysitter-ads/bebysitter-ads-list/bebysitter-ads-list.component';
import { BebysitterAdsDetailComponent } from './babysitter-ads/bebysitter-ads-detail/bebysitter-ads-detail.component';
import { BabysitterAdsComponent } from './babysitter-ads/babysitter-ads.component';
import { SetAdComponent } from './set-ad/set-ad.component';
import { SitterAdComponent } from './set-ad/sitter-ad/sitter-ad.component';
import { ParentAdComponent } from './set-ad/parent-ad/parent-ad.component';
import { ParentAdsDetailComponent } from './parent-ads/parent-ads-detail/parent-ads-detail.component';
import { ParentAdsListComponent } from './parent-ads/parent-ads-list/parent-ads-list.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/find-sitter', pathMatch: 'full' },
    { path: 'find-sitter', component: CssBabyComponent },
    {
        path: 'babysitter-ads', component: BabysitterAdsComponent, children: [
            {
                path: '', component: BebysitterAdsListComponent
            },

            { path: ':id', component: BebysitterAdsDetailComponent }
        ]
    },
    {
        path: 'parent-ads', component: ParentAdsListComponent, children: [

            { path: ':id', component: ParentAdsDetailComponent }
        ],
    },
    { path: 'info', component: AboutAppComponent },
    {
        path: 'set-ad', component: SetAdComponent, children: [
            {
                path: 'sitter-ad', component: SitterAdComponent
            },
            {
                path: 'parent-ad', component: ParentAdComponent

            }
        ]
    }


];



@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
