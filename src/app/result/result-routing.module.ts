import { ResultListComponent } from './result-list/result-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultPage } from './result.page';

const routes: Routes = [
  {
    path: '',
    component: ResultPage,
    children:[
      {
        path:'',
        component:ResultListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultPageRoutingModule {}
