import { RidersListComponent } from './riders-list/riders-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidersPage } from './riders.page';

const routes: Routes = [
  {
    path: '',
    component: RidersPage,
    children:
    [
      {
        path: '',
        component: RidersListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidersPageRoutingModule {}
