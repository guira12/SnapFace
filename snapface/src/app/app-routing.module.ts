import { Input, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FingleFaceSnapComponent } from "./fingle-face-snap/fingle-face-snap.component";

// tableau de toutes les routes de l'application
const routes: Routes = [
    // on lie un path à un compposant
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'facesnaps/:id', component: FingleFaceSnapComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [ // RouteModule permet de rajouter des routes, fct forRoot permet d'enregistrer les routes
    // On appelle  RouterModule.forRoot()  en passant le tableau de routes pour enregistrer les routes 
    // dans le routeur Angular.
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}