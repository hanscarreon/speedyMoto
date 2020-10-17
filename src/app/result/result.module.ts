import { ResultListComponent } from './result-list/result-list.component';
import { SideMenuComponent } from './../component/side-menu/side-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPageRoutingModule } from './result-routing.module';

import { ResultPage } from './result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultPageRoutingModule,
  ],
  declarations: [
    ResultPage,
    SideMenuComponent,
    ResultListComponent

  ]
})
export class ResultPageModule {}
