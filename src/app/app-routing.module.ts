import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { CssBabyComponent } from './header/css-baby/css-baby.component';
import { BabysitterAdsListComponent } from './babysitter-ads/babysitter-ads-list/babysitter-ads-list.component';
import { BabysitterAdsDetailComponent } from './babysitter-ads/babysitter-ads-detail/babysitter-ads-detail.component';
import { BabysitterAdsComponent } from './babysitter-ads/babysitter-ads.component';
import { SetAdComponent } from './set-ad/set-ad.component';
import { SitterAdComponent } from './set-ad/sitter-ad/sitter-ad.component';
import { ParentAdComponent } from './set-ad/parent-ad/parent-ad.component';
import { ParentAdsDetailComponent } from './parent-ads/parent-ads-detail/parent-ads-detail.component';
import { ParentAdsListComponent } from './parent-ads/parent-ads-list.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/find-sitter', pathMatch: 'full' },
    { path: 'find-sitter', component: CssBabyComponent },
    {
        path: 'babysitter-ads', component: BabysitterAdsComponent, children: [
            {
                path: '', component: BabysitterAdsListComponent
            },

            { path: ':id', component: BabysitterAdsDetailComponent }
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
