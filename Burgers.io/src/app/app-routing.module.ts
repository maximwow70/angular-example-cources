import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { TeamComponent } from './component/team/team.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { PipesPresentationComponent } from './components/pipes-presentation/pipes-presentation.component';
import { ContactsGuardGuard } from './guards/contacts-guard.guard';
import { BurgerListComponent } from './modules/burger-list/burger-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [ContactsGuardGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      { path: '**', redirectTo: '/about/details' },
    ],
  },
  {
    path: 'burgers',
    component: BurgerListComponent,
  },
  {
    path: 'burgers/:id',
    component: BurgerListComponent,
  },
  {
    path: 'pipes',
    component: PipesPresentationComponent,
  },
  { path: 'burger-list', redirectTo: '/burgers' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
