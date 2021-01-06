import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'about', component: AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
