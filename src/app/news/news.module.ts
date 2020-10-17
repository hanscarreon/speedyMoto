import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListNewsComponent } from './list-news/list-news.component';
import { SideMenuComponent } from './../component/side-menu/side-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    NewsPage,
    SideMenuComponent,
    ListNewsComponent

  ]
})
export class NewsPageModule {}
