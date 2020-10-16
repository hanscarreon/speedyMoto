import { ViewNewsComponent } from './view-news/view-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage,
    children: [
      {
        path: '',
        component: ListNewsComponent
      },
      {
        path: 'view',
        component: ViewNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
