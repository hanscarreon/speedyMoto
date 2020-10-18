import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideMenuComponent } from './../component/side-menu/side-menu.component';
import { GuideListComponent } from './guide-list/guide-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidePageRoutingModule } from './guide-routing.module';

import { GuidePage } from './guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    GuidePage,
    GuideListComponent,
    SideMenuComponent
  ]
})
export class GuidePageModule {}
