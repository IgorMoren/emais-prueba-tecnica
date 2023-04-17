import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavsComponent } from './pages/favs/favs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'search',
    component: DashboardComponent
  },
  {
    path: 'favs',
    component: FavsComponent
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
