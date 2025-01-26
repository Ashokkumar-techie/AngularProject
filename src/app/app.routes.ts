import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},

    {path:'about/:id1/:name1',component:AboutComponent},
    {path:'contact/:id/:name',component:ContactComponent},
    {path:'**',component:PageNotFoundComponent}
];
