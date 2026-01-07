import { Routes } from '@angular/router';

import { ListComponent } from './pages/list-component/list-component';
import { DetailsComponent } from './pages/details-component/details-component';
import { AddPersonComponent } from './pages/add-person-component/add-person-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add', component: AddPersonComponent },
  { path: '**', component: NotFoundComponent },
];
