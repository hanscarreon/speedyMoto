import { GuideListComponent } from './guide-list/guide-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidePage } from './guide.page';

const routes: Routes = [
  {
    path: '',
    component: GuidePage,
    children:
    [
      {
        path: '',
        component: GuideListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidePageRoutingModule {}
