import { SideMenuComponent } from './../component/side-menu/side-menu.component';
import { RidersListComponent } from './riders-list/riders-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidersPageRoutingModule } from './riders-routing.module';

import { RidersPage } from './riders.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidersPageRoutingModule,
    MatExpansionModule,
    MatStepperModule
    
  ],
  declarations: [
    RidersPage,
    RidersListComponent,
    SideMenuComponent
  ]
})
export class RidersPageModule {}
